import React from "react";
import useApplication from "./useApplication";

const Application = () => {
  const { aspekPenilaian, handleChange, showOutput, setShowOutput } =
    useApplication();

  return (
    <>
      <div style={{ display: "flex", width: "full", justifyContent: "center" }}>
        <p
          style={{ textAlign: "center", fontSize: "20px", fontWeight: "bold" }}
        >
          Aplikasi Penilaian Mahasiswa
        </p>
      </div>
      <div
        style={{
          display: "flex",
          width: "full",
          gap: "120px",
          justifyContent: "center",
          marginLeft: "10%",
        }}
      >
        {Array(4)
          .fill()
          .map((item, index) => (
            <p style={{ width: "80px", textAlign: "center" }}>
              Aspek Penilaian {index + 1}
            </p>
          ))}
      </div>
      {Array(10)
        .fill()
        .map((_, index) => (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "0px 20% 0px 20%",
              height: "20px",
              border: "1px solid",
              padding: "8px 10px",
              borderRadius: "4px",
              marginBottom: "8px",
            }}
            key={index}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: "gray",
                  borderRadius: "100%",
                }}
              ></div>
              <p style={{ width: "120px" }}>Mahasiswa {index + 1}</p>
            </div>
            {Array(4)
              .fill()
              .map((_, indexInput) => (
                <input
                  type="number"
                  value={
                    aspekPenilaian[`aspek_penilaian_${indexInput + 1}`][
                      `mahasiswa_${index + 1}`
                    ]
                  }
                  onChange={(e) => handleChange(e, indexInput + 1, index + 1)}
                />
              ))}
          </div>
        ))}
      <div
        style={{
          width: "full",
          display: "flex",
          justifyContent: "end",
          marginTop: "10px",
        }}
      >
        <button
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "4px 20px",
            borderRadius: "4px",
            fontSize: "18px",
            marginRight: "20%",
            cursor: "pointer",
          }}
          children="Simpan"
          onClick={() => setShowOutput(true)}
        />
      </div>

      {showOutput && (
        <pre style={{ display: "flex", justifyContent: "center" }}>
          {JSON.stringify(aspekPenilaian, null, 2)}
        </pre>
      )}
    </>
  );
};

export default Application;
