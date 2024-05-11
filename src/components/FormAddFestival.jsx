import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useFestivalContext } from "../context/FestivalContext";

import ButtonComeBack from "./ButtonComeBack";

import Loading from "./Loading";
import Editor from "./Editor";

const formAddFestival = () => {
  useEffect(() => {
    setIsUpload(false);
    setListOfTeachers([]);
  }, []);
  const navigate = useNavigate();

  const {
    festivalInfo,
    setFestivalInfo,
    uploadImageToStorage,
    uploadFestival,
    image,
    teacher,
    modality,
    listOfTeachers,
    setListOfTeachers,
    setModality,
    setTeacher,
    setImage,
    setIsUpload,
    isUpload,
  } = useFestivalContext();

  const handleChange = (e) => {
    setFestivalInfo({ ...festivalInfo, [e.target.name]: e.target.value });
  };

  const handleCheckBox = (e) => {
    if (e.target.checked) {
      setModality([...modality, e.target.value]);
    } else {
      setModality(modality.filter((item) => item !== e.target.value));
    }
  };

  const addTeachers = (e) => {
    e.preventDefault();
    if (teacher == "") return;
    setListOfTeachers([...listOfTeachers, teacher]);
    setTeacher("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (modality.length <= 0) alert("debes introducir una modalidad");
    uploadImageToStorage();
    console.log(isUpload);
  };
  if (isUpload) {
    navigate("/");
  }

  return (
    <>
      {uploadFestival ? (
        <div className="mt-32" style={{ height: `calc(100vh - 200px)` }}>
          <Loading title={"Registrando festival"} />
        </div>
      ) : (
        <div className="bg-[url('./assets/Lindy_Hop.jpeg')] bg-cover bg-no-repeat">
          <div className="md:p-8 bg-zinc-950 bg-opacity-80">
            <form onSubmit={handleSubmit}>
              <div className=" md:w-[700px] mx-auto px-4  bg-zinc-800 p-10 md:rounded-md">
                <div className="flex justify-end pb-4">
                  <ButtonComeBack />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-5 ">
                  <div className="w-full">
                    <label className="text-orange-200 " htmlFor="name">
                      Nombre del festival
                    </label>
                    <input
                      id="name"
                      name="name"
                      className="input input-bordered w-full"
                      type="text"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="w-full">
                    <label className="text-orange-200 " htmlFor="city">
                      Ciudad
                    </label>
                    <input
                      id="city"
                      name="city"
                      className="input input-bordered w-full"
                      type="text"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="mt-5 flex gap-5">
                  <div className="w-full">
                    <label className="text-orange-200 " htmlFor="address">
                      Dirección
                    </label>
                    <input
                      id="address"
                      name="address"
                      className="input input-bordered w-full"
                      type="text"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="w-[40%]">
                    <label className="text-orange-200 " htmlFor="adress">
                      CP
                    </label>
                    <input
                      id="CP"
                      name="CP"
                      className="input input-bordered w-full"
                      type="text"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <label className="text-orange-200 ">Profesores</label>
                  <div className="join w-full">
                    <input
                      className="input input-bordered join-item w-full"
                      value={teacher}
                      onChange={(e) => setTeacher(e.target.value)}
                    />
                    <button
                      onClick={addTeachers}
                      className="btn join-item text-zinc-900 bg-orange-200 border-none hover:bg-orange-100 "
                    >
                      Añadir
                    </button>
                  </div>
                  <div>
                    {listOfTeachers.length > 0 && (
                      <div className="flex flex-col border border-zinc-900 rounded-md mt-5 px-5 py-2 bg-zinc-100">
                        {listOfTeachers.map((teacher, index) => (
                          <span key={index}>{teacher}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className=" mt-5 text-center">
                  <label className="text-orange-200 uppercase ">
                    Modalidad/es
                  </label>
                  <div className="flex justify-between  md:justify-around gap-2 mt-5">
                    <div className="flex flex-col items-center">
                      <span className="label-text text-orange-200 mb-3">
                        Lindy Hop
                      </span>
                      <input
                        type="checkbox"
                        value="Lindy Hop"
                        className="toggle hover:bg-orange-200 bg-orange-200 border-orange-200"
                        onChange={handleCheckBox}
                      />
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="label-text text-orange-200 mb-3">
                        Blues
                      </span>
                      <input
                        type="checkbox"
                        value="Blues"
                        className="toggle  hover:bg-orange-200 bg-orange-200 border-orange-200"
                        onChange={handleCheckBox}
                      />
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="label-text text-orange-200 mb-3">
                        Balboa
                      </span>
                      <input
                        type="checkbox"
                        value="Balboa"
                        className="toggle hover:bg-orange-200 bg-orange-200 border-orange-200"
                        onChange={handleCheckBox}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <div className="text-center">
                    <label className="text-orange-200 uppercase w-full ">
                      Precio
                    </label>
                  </div>
                  <div className="flex gap-5">
                    <div className="flex flex-col w-full">
                      <label className="text-orange-200">Desde</label>
                      <input
                        type="text"
                        name="minPrice"
                        className="input input-bordered w-full "
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="flex flex-col w-full">
                      <label className="text-orange-200">Hasta</label>
                      <input
                        type="text"
                        name="maxPrice"
                        className="input input-bordered w-full "
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-5  mt-5">
                  <div className="w-full">
                    <label className="text-orange-200" htmlFor="data_start">
                      Fecha Inicio
                    </label>
                    <input
                      id="data_start"
                      name="data_start"
                      className="input input-bordered w-full"
                      type="date"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="w-full">
                    <label className="text-orange-200" htmlFor="data_end">
                      Fecha Fin
                    </label>
                    <input
                      id="data_end"
                      name="data_end"
                      className="input input-bordered w-full"
                      type="date"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-5  mt-5">
                  <div className="w-full">
                    <label className="block text-orange-200" htmlFor="image">
                      Imagen de portada
                    </label>
                    {!image ? (
                      <label
                        htmlFor="image"
                        className="btn w-full text-zinc-900 bg-orange-200 border-none hover:bg-orange-100"
                      >
                        Subir Archivo
                      </label>
                    ) : (
                      <label
                        htmlFor="image"
                        className="btn w-full text-zinc-900 bg-orange-200 border-none hover:bg-orange-100"
                      >
                        Archivo cargado
                      </label>
                    )}

                    <input
                      id="image"
                      type="file"
                      className="file-input file-input-bordered  w-full hidden"
                      onChange={(e) => setImage(e.target.files[0])}
                    />
                  </div>
                  <div className="w-full">
                    <label className="text-orange-200" htmlFor="url">
                      Url del festival
                    </label>
                    <input
                      type="text"
                      id="url"
                      name="link"
                      className="input input-bordered w-full "
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="w-full mt-5">
                  <label className="text-orange-200">Descripción</label>
                  <Editor />
                </div>
                <div className="grid grid-cols-1 justify-items-center gap-5  mt-5">
                  <button className="btn text-zinc-900 bg-orange-200 border-none hover:bg-orange-100 w-full">
                    Enviar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default formAddFestival;
