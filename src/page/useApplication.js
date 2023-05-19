import { useState } from "react";

const useApplication = () => {
  const [showOutput, setShowOutput] = useState(false);
  const [aspekPenilaian, setAspekPenilaian] = useState({
    aspek_penilaian_1: {
      mahasiswa_1: 0,
      mahasiswa_2: 0,
      mahasiswa_3: 0,
      mahasiswa_4: 0,
      mahasiswa_5: 0,
      mahasiswa_6: 0,
      mahasiswa_7: 0,
      mahasiswa_8: 0,
      mahasiswa_9: 0,
      mahasiswa_10: 0,
    },
    aspek_penilaian_2: {
      mahasiswa_1: 0,
      mahasiswa_2: 0,
      mahasiswa_3: 0,
      mahasiswa_4: 0,
      mahasiswa_5: 0,
      mahasiswa_6: 0,
      mahasiswa_7: 0,
      mahasiswa_8: 0,
      mahasiswa_9: 0,
      mahasiswa_10: 0,
    },
    aspek_penilaian_3: {
      mahasiswa_1: 0,
      mahasiswa_2: 0,
      mahasiswa_3: 0,
      mahasiswa_4: 0,
      mahasiswa_5: 0,
      mahasiswa_6: 0,
      mahasiswa_7: 0,
      mahasiswa_8: 0,
      mahasiswa_9: 0,
      mahasiswa_10: 0,
    },
    aspek_penilaian_4: {
      mahasiswa_1: 0,
      mahasiswa_2: 0,
      mahasiswa_3: 0,
      mahasiswa_4: 0,
      mahasiswa_5: 0,
      mahasiswa_6: 0,
      mahasiswa_7: 0,
      mahasiswa_8: 0,
      mahasiswa_9: 0,
      mahasiswa_10: 0,
    },
  });

  const handleChange = (e, index, indexInput) => {
    setShowOutput(false);
    setAspekPenilaian({
      ...aspekPenilaian,
      [`aspek_penilaian_${index}`]: {
        ...aspekPenilaian[`aspek_penilaian_${index}`],
        [`mahasiswa_${indexInput}`]: parseInt(e.target.value),
      },
    });
  };

  return {
    aspekPenilaian,
    setAspekPenilaian,
    handleChange,
    showOutput,
    setShowOutput,
  };
};

export default useApplication;
