import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useLangStore } from '../../store/useLangStore';

export const CarsDetails = () => {
  const { id } = useParams();
  const { lang, t } = useLangStore();

  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const isDari = lang === 'dr';

  // =====================================
  // Fetch Car From Database
  // =====================================

  useEffect(() => {
    const fetchCar = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `http://localhost:5000/cars/${id}`
        );

        if (!response.ok) {
          throw new Error('Car not found');
        }

        const data = await response.json();

        setCar(data);
        setSelectedImage(data.mainImage);
      } catch (err) {
        console.error(err);
        setError(
          isDari
            ? 'اطلاعات موتر پیدا نشد.'
            : 'Vehicle information could not be found.'
        );
      } finally {
        setLoading(false);
      }
    };

    fetchCar();
  }, [id, isDari]);

  // =====================================
  // Loading
  // =====================================

  if (loading) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center px-[20px]">
        <div className="text-center">
          <div className="mx-auto mb-[16px] h-[42px] w-[42px] animate-spin rounded-full border-[4px] border-brand-yellow border-t-transparent" />

          <p
            dir={isDari ? 'rtl' : 'ltr'}
            className="font-semibold text-[18px] text-brand-black"
          >
            {isDari
              ? 'در حال دریافت اطلاعات موتر...'
              : 'Loading vehicle information...'}
          </p>
        </div>
      </section>
    );
  }

  // =====================================
  // Error
  // =====================================

  if (error || !car) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center px-[20px]">
        <div
          className="
            w-full 
            max-w-[600px]
            rounded-[24px]
            border
            border-black/[0.10]
            bg-white
            px-[30px]
            py-[45px]
            text-center
            shadow-[0_10px_30px_rgba(0,0,0,0.08)]
          "
        >
          <h1
            dir={isDari ? 'rtl' : 'ltr'}
            className="
              mb-[20px]
              font-extrabold
              text-[28px]
              text-brand-black
            "
          >
            {isDari ? 'موتر پیدا نشد' : 'Vehicle Not Found'}
          </h1>

          <p
            dir={isDari ? 'rtl' : 'ltr'}
            className="
              mb-[28px]
              font-semibold
              text-[16px]
              leading-[160%]
              text-brand-black/70
            "
          >
            {error ||
              (isDari
                ? 'اطلاعات این موتر در دیتابیس موجود نیست.'
                : 'The requested vehicle does not exist in the database.')}
          </p>

          <Link
            to="/cars"
            className="
              inline-flex
              h-[42px]
              min-w-[150px]
              items-center
              justify-center
              rounded-[20px]
              bg-brand-yellow
              px-[20px]
              font-[600]
              text-[16px]
              text-brand-black
              transition-all
              duration-300
              hover:scale-[1.04]
              hover:shadow-[0_6px_15px_rgba(0,0,0,0.12)]
            "
          >
            {isDari ? 'بازگشت به موترها' : 'Back to Cars'}
          </Link>
        </div>
      </section>
    );
  }

  // =====================================
  // Database Data
  // =====================================

  const carName = isDari
    ? car.name_dr
    : car.name_en;

  const shortDescription = isDari
    ? car.shortDesc_dr
    : car.shortDesc_en;

  const longDescription = isDari
    ? car.longDesc_dr
    : car.longDesc_en;

  const category = isDari
    ? car.category_dr ?? car.category
    : car.category_en ?? car.category;

  const tags = isDari
    ? car.tags_dr
    : car.tags_en;

  const specs = car.specs || {};

  const gallery = Array.isArray(car.gallery)
    ? car.gallery
    : [];

  const images = [
    car.mainImage,
    ...gallery.filter(
      (image) => image !== car.mainImage
    ),
  ];

  // =====================================
  // Image URL
  // =====================================

  const imageUrl = (image) => {
    if (!image) return '';

    return `${import.meta.env.BASE_URL}${image.replace(
      /^\/+/,
      ''
    )}`;
  };

  const mainImageUrl = selectedImage
    ? imageUrl(selectedImage)
    : imageUrl(car.mainImage);

  // =====================================
  // Specs From Database
  // =====================================

  const fuelType = isDari
    ? specs.fuelType_dr
    : specs.fuelType_en;

  const engine = isDari
    ? specs.engine_dr
    : specs.engine_en;

  const gearbox = isDari
    ? specs.gearbox_dr
    : specs.gearbox_en;

  const driveType = isDari
    ? specs.driveType_dr
    : specs.driveType_en;

  const security = isDari
    ? specs.security_dr
    : specs.security_en;

  const consumption = isDari
    ? specs.consumption_dr
    : specs.consumption_en;

  const luggage = isDari
    ? specs.luggage_dr
    : specs.luggage_en;

  // =====================================
  // Labels
  // =====================================

  const armoredLabel = car.isArmored
    ? isDari
      ? car.armoredLabel_dr
      : car.armoredLabel_en
    : null;

  const passengerLabel = isDari
    ? car.passengerLabel_dr
    : car.passengerLabel_en;

  const viewCarsLabel =
    t?.cars?.back_to_cars ??
    (isDari
      ? 'بازگشت به موترها'
      : 'Back to Cars');

  const detailsTitle =
    t?.cars?.details ??
    (isDari
      ? 'جزئیات موتر'
      : 'Vehicle Details');

  // =====================================
  // Render
  // =====================================

  return (
    <main className="w-full mt-[80px] px-[20px] py-[50px] md:px-[40px] lg:px-[60px]">
      <div className="mx-auto w-full max-w-[1200px]">

        {/* =========================
            Back Button
        ========================== */}

        <div className="mb-[30px]">
          <Link
            to="/cars"
            className="
              inline-flex
              items-center
              gap-[8px]
              font-[600]
              text-[16px]
              text-brand-black
              transition-all
              duration-300
              hover:text-brand-yellow
            "
          >
            <span className="text-[20px]">
              {isDari ? '→' : '←'}
            </span>

            {viewCarsLabel}
          </Link>
        </div>

        {/* =========================
            Main Details Card
        ========================== */}

        <section
          className="
            overflow-hidden
            rounded-[24px]
            border
            border-black/[0.10]
            bg-white
            shadow-[0_10px_35px_rgba(0,0,0,0.08)]
          "
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* =========================
                Image Section
            ========================== */}

            <div className="p-[16px] md:p-[24px]">

              {/* Main Image */}

              <div
                className="
                  group
                  relative
                  h-[300px]
                  w-full
                  overflow-hidden
                  rounded-[20px]
                  bg-black/[0.04]
                  md:h-[450px]
                "
              >
                <img
                  src={mainImageUrl}
                  alt={carName}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-[1.05]
                  "
                />

                {armoredLabel && (
                  <span
                    className="
                      absolute
                      start-[18px]
                      top-[18px]
                      rounded-[20px]
                      bg-brand-yellow
                      px-[14px]
                      py-[7px]
                      font-[600]
                      text-[15px]
                      text-brand-black
                      shadow-[0_5px_15px_rgba(0,0,0,0.15)]
                    "
                  >
                    {armoredLabel}
                  </span>
                )}
              </div>

              {/* =========================
                  Gallery
              ========================== */}

              {images.length > 1 && (
                <div className="mt-[16px] grid grid-cols-3 gap-[10px]">
                  {images.map((image, index) => {
                    const isSelected =
                      selectedImage === image;

                    return (
                      <button
                        key={`${image}-${index}`}
                        type="button"
                        onClick={() =>
                          setSelectedImage(image)
                        }
                        className={`
                          group
                          relative
                          h-[90px]
                          overflow-hidden
                          rounded-[14px]
                          border
                          transition-all
                          duration-300
                          ${
                            isSelected
                              ? 'border-brand-yellow shadow-[0_5px_15px_rgba(0,0,0,0.12)]'
                              : 'border-black/[0.10] hover:border-brand-yellow'
                          }
                        `}
                      >
                        <img
                          src={imageUrl(image)}
                          alt={`${carName} ${index + 1}`}
                          loading="lazy"
                          className="
                            h-full
                            w-full
                            object-cover
                            transition-transform
                            duration-500
                            group-hover:scale-[1.08]
                          "
                        />

                        {isSelected && (
                          <span
                            className="
                              absolute
                              inset-0
                              rounded-[14px]
                              border-[3px]
                              border-brand-yellow
                            "
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* =========================
                Car Information
            ========================== */}

            <div
              dir={isDari ? 'rtl' : 'ltr'}
              className="
                flex
                flex-col
                justify-center
                p-[24px]
                md:p-[40px]
              "
            >

              {/* Category + Tags */}

              <div className="mb-[16px] flex flex-wrap items-center gap-[8px]">

                {category && (
                  <span
                    className="
                      inline-flex
                      min-h-[30px]
                      items-center
                      justify-center
                      rounded-[20px]
                      bg-brand-yellow
                      px-[14px]
                      py-[5px]
                      font-[600]
                      text-[15px]
                      text-brand-black
                    "
                  >
                    {category}
                  </span>
                )}

                {tags?.map((tag, index) => (
                  <span
                    key={`${tag}-${index}`}
                    className="
                      inline-flex
                      min-h-[30px]
                      items-center
                      justify-center
                      rounded-[20px]
                      border
                      border-brand-yellow
                      px-[12px]
                      py-[4px]
                      font-[600]
                      text-[14px]
                      text-brand-black
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Car Name */}

              <h1
                className="
                  mb-[18px]
                  font-extrabold
                  text-[30px]
                  leading-[120%]
                  text-brand-black
                  md:text-[38px]
                "
              >
                {carName}
              </h1>

              {/* Short Description */}

              <p
                className="
                  mb-[24px]
                  font-semibold
                  text-[16px]
                  leading-[180%]
                  text-brand-black/75
                "
              >
                {shortDescription}
              </p>

              {/* Passenger Capacity */}

              {car.passengerCapacity && (
                <div
                  className="
                    mb-[25px]
                    inline-flex
                    w-fit
                    items-center
                    gap-[8px]
                    rounded-[20px]
                    border
                    border-brand-yellow
                    px-[15px]
                    py-[8px]
                    font-[600]
                    text-[16px]
                    text-brand-black
                  "
                >
                  <span>
                    {car.passengerCapacity}
                  </span>

                  <span>
                    {passengerLabel}
                  </span>
                </div>
              )}

              {/* =========================
                  Quick Specs
              ========================== */}

              <div className="grid grid-cols-2 gap-[12px]">

                {fuelType && (
                  <SpecItem
                    title={
                      isDari
                        ? 'نوع سوخت'
                        : 'Fuel Type'
                    }
                    value={fuelType}
                  />
                )}

                {engine && (
                  <SpecItem
                    title={
                      isDari
                        ? 'قدرت انجین'
                        : 'Engine'
                    }
                    value={engine}
                  />
                )}

                {gearbox && (
                  <SpecItem
                    title={
                      isDari
                        ? 'گیربکس'
                        : 'Gearbox'
                    }
                    value={gearbox}
                  />
                )}

                {driveType && (
                  <SpecItem
                    title={
                      isDari
                        ? 'حالت انتقال قدرت'
                        : 'Drive Type'
                    }
                    value={driveType}
                  />
                )}

              </div>
            </div>
          </div>

          {/* =========================
              Full Description
          ========================== */}

          <div
            dir={isDari ? 'rtl' : 'ltr'}
            className="
              border-t
              border-black/[0.08]
              px-[24px]
              py-[30px]
              md:px-[40px]
            "
          >
            <h2
              className="
                mb-[14px]
                font-extrabold
                text-[24px]
                text-brand-black
              "
            >
              {detailsTitle}
            </h2>

            <p
              className="
                max-w-[1000px]
                font-semibold
                text-[16px]
                leading-[190%]
                text-brand-black/75
              "
            >
              {longDescription}
            </p>
          </div>
        </section>

        {/* =========================
            Technical Specifications
        ========================== */}

        <section
          dir={isDari ? 'rtl' : 'ltr'}
          className="
            mt-[30px]
            rounded-[24px]
            border
            border-black/[0.10]
            bg-white
            p-[24px]
            shadow-[0_10px_30px_rgba(0,0,0,0.06)]
            md:p-[35px]
          "
        >
          <h2
            className="
              mb-[25px]
              font-extrabold
              text-[26px]
              text-brand-black
            "
          >
            {isDari
              ? 'مشخصات فنی'
              : 'Technical Specifications'}
          </h2>

          <div className="grid grid-cols-1 gap-[12px] md:grid-cols-2">

            {/* Fuel */}

            {fuelType && (
              <SpecItem
                title={
                  isDari
                    ? 'نوع سوخت'
                    : 'Fuel Type'
                }
                value={fuelType}
              />
            )}

            {/* Engine */}

            {engine && (
              <SpecItem
                title={
                  isDari
                    ? 'قدرت انجین'
                    : 'Engine'
                }
                value={engine}
              />
            )}

            {/* Gearbox */}

            {gearbox && (
              <SpecItem
                title={
                  isDari
                    ? 'گیربکس'
                    : 'Gearbox'
                }
                value={gearbox}
              />
            )}

            {/* Drive Type */}

            {driveType && (
              <SpecItem
                title={
                  isDari
                    ? 'حالت انتقال قدرت'
                    : 'Drive Type'
                }
                value={driveType}
              />
            )}

            {/* Security */}

            {security && (
              <SpecItem
                title={
                  isDari
                    ? 'سیستم امنیتی'
                    : 'Security System'
                }
                value={security}
              />
            )}

            {/* Consumption */}

            {consumption && (
              <SpecItem
                title={
                  isDari
                    ? 'مصرف سوخت'
                    : 'Fuel Consumption'
                }
                value={consumption}
              />
            )}

            {/* Passenger */}

            {car.passengerCapacity && (
              <SpecItem
                title={
                  isDari
                    ? 'ظرفیت سرنشین'
                    : 'Passenger Capacity'
                }
                value={`${car.passengerCapacity} ${passengerLabel || ''}`}
              />
            )}

            {/* Luggage */}

            {luggage && (
              <SpecItem
                title={
                  isDari
                    ? 'ظرفیت بکس'
                    : 'Luggage Capacity'
                }
                value={luggage}
              />
            )}

          </div>
        </section>

      </div>
    </main>
  );
};

// =====================================
// Specification Item
// =====================================

const SpecItem = ({ title, value }) => {
  return (
    <div
      className="
        group
        rounded-[18px]
        border
        border-black/[0.08]
        bg-white
        px-[18px]
        py-[17px]
        transition-all
        duration-300
        hover:-translate-y-[3px]
        hover:border-brand-yellow
        hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)]
      "
    >
      <p
        className="
          mb-[7px]
          font-[600]
          text-[14px]
          text-black/50
        "
      >
        {title}
      </p>

      <p
        className="
          font-[600]
          text-[16px]
          leading-[150%]
          text-brand-black
        "
      >
        {value}
      </p>
    </div>
  );
};