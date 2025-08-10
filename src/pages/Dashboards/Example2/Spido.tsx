import React, { useState } from 'react';
import hend from "assets/images/Hend.png";
import monang from "assets/images/Monang.png";
import pingkan from "assets/images/Pingkan.png";
import tom from "assets/images/Tom.png";
import ave from "assets/images/Ave.png";
interface SensorData {
  suhu: { nilai: number } | null;
  kelembaban: { nilai: number } | null;
  cahaya: { nilai: number } | null;
  CO2: { nilai: number } | null;
  NH3: { nilai: number } | null;
  debu: { nilai: number } | null;
}

// Card untuk foto tim peneliti
const ResearcherCard = ({
  name,
  title,
  department,
  faculty,
  imageSrc,
}: {
  name: string;
  title: string;
  department: string;
  faculty: string;
  imageSrc: string;
}) => {
  return (
    <div className="order-2 md:col-span-6 lg:col-span-6 col-span-12 2xl:order-1 card 2xl:col-span-4 relative overflow-hidden">
      <div className="card-body flex flex-col items-center">
        <img
          src={imageSrc}
          alt={name}
          className="w-48 h-48 object-cover rounded-full mb-4 border-4 border-gray-300"
        />
        <p className="text-black font-bold text-center">{name}</p>
        {title && <p className="text-black text-sm text-center">{title}</p>}
        <p className="text-black text-sm text-center">{department}</p>
        <p className="text-black text-sm text-center">{faculty}</p>
      </div>
    </div>
  );
};

// Card untuk sensor
const SensorCard = ({
  title,
  data,
  unit,
  sensorColor,
  id,
  imageSrc,
}: {
  title: string;
  data: number;
  unit: string;
  sensorColor: string;
  id: string;
  imageSrc: string;
}) => {
  return (
    <div
      className={`order-2 md:col-span-6 lg:col-span-6 col-span-12 
      2xl:order-1 card 2xl:col-span-4 
      group-data-[skin=bordered]:border-${sensorColor}-500/20 
      relative overflow-hidden`}
    >
      <div className="card-body flex flex-col items-center">
        <img
          src={imageSrc}
          alt={title}
          className="w-48 h-48 object-contain mb-4"
        />
        <p className="text-black font-semibold">{title}</p>
        <p className="text-black text-lg">
          {data} {unit}
        </p>
      </div>
    </div>
  );
};

const Spido = () => {

  return (
    <React.Fragment>
      
      <h3 className="text-black col-span-12">Tim Peneliti</h3>
      <div className="mb-4"></div>
      <div className="mb-4"></div>
      <div className="mb-4"></div>
      <div className="mb-4"></div>
      <div className="mb-4"></div>
      <div className="mb-4"></div>
      <div className="mb-4"></div>
      <div className="mb-4"></div>
      {/* Tim Peneliti */}
      <ResearcherCard
        name="Prof. Ir. Hendrawan, M.Sc., Ph.D."
        title=""
        department="Teknik Telekomunikasi"
        faculty="Sekolah Teknik Elektro dan Informatika"
        imageSrc={hend}
      />

      <ResearcherCard
        name="Dr. Hamonangan Situmorang, S.T, M.T."
        title=""
        department="Teknik Telekomunikasi"
        faculty="Sekolah Teknik Elektro dan Informatika"
        imageSrc={monang}
      />

      <ResearcherCard
        name="Prof. Dr. Pingkan Aditiawati, MS"
        title=""
        department="Bioteknologi Mikroba"
        faculty="Sekolah Ilmu dan Teknologi Hayati"
        imageSrc={pingkan}
      />

      <div className="mb-4"></div>
      <ResearcherCard
        name="Samuel Tommy Setiadjie, S.T."
        title=""
        department="Mahasiswa Teknik Telekomunikasi"
        faculty="Sekolah Teknik Elektro dan Informatika"
        imageSrc={tom}
      />

      <ResearcherCard
        name="Averroes Aji Van Tafakur, S.T."
        title=""
        department="Mahasiswa Teknik Telekomunikasi"
        faculty="Sekolah Teknik Elektro dan Informatika"
        imageSrc={ave}
      />
    </React.Fragment>
  );
};

export default Spido;
