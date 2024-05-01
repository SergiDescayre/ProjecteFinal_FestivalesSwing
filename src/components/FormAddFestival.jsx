import { useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import appFirebase from "../credentials";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useFestivalContext } from "../context/FestivalContext";

import Loading from "./Loading";
import Editor from "./Editor"
import { check } from "prettier";

const formAddFestival = () => {

  const navigate = useNavigate();
  const { contentQuill } = useFestivalContext()

  const [uploadFestival, setUploadFestival] = useState(false)
  const [image, setImage] = useState("");
  const [teacher, setTeacher] = useState("");
  const [modality, setModality] = useState([]);
  const [listOfTeachers, setListOfTeachers] = useState([]);

  const [festivalInfo,setFestivalInfo] = useState({}
)

const handleChange = (e) => {
  setFestivalInfo({...festivalInfo, [e.target.name]: e.target.value})
}

  const handleCheckBox = (e) => {
    if (e.target.checked) {
      setModality([...modality, e.target.value]);
    } else {
      setModality(modality.filter((item) => item !== e.target.value));
    }
  };

  const addTeachers = () => {
    setListOfTeachers([...listOfTeachers, teacher]);
    setTeacher("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

console.log(contentQuill)
    //if(modality.length <= 0) return  alert("debes introducir una modalidad")
    uploadImageToStorage();
  };

  //subir imagen a storage y subir festival
  const uploadImageToStorage = async () => {
    setUploadFestival(true)

    const auth = getAuth(appFirebase);
    const storage = getStorage();
    try {
      if (image === "") {
        setUploadFestival(false)
        return alert("Debe haber una imagen");

      }

      const storageRef = ref(storage, image.name);
      await uploadBytes(storageRef, image);
      const imageUrl = await getDownloadURL(storageRef);

      const db = getFirestore(appFirebase);
      // Añadir el documento a la colección "festivals" y obtener el ID asignado
      const docRef = await addDoc(collection(db, "festivals"), {
        ...festivalInfo,
        userId: auth.currentUser.uid,
        img: imageUrl,
        listOfTeachers,
        isFavorite: false,
        attend: false,
        contentQuill,
        modality
      });

      // Obtener el ID del documento recién creado
      const docId = docRef.id;

      // Actualizar el documento para incluir el ID
      await updateDoc(doc(db, "festivals", docId), {
        docId: docId,
      });

      // Redirigir a la página de festivales
      navigate("/");
    } catch (error) {
      console.log(error);
    }
    setUploadFestival(false)
  };

  

  return (
    <>
      {uploadFestival ? <Loading title={"Registrando festival"} />
        : <div>
          <form onSubmit={handleSubmit}>
            <div className="md:w-[600px] mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-5 ">
                <div className="w-full">
                  <label htmlFor="name">Nombre del festival</label>
                  <input
                    id="name"
                    name="name"
                    className="input input-bordered w-full"
                    type="text"
                    onChange={handleChange}
                  //required
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="city">Ciudad</label>
                  <input
                    id="city"
                    name="city"
                    className="input input-bordered w-full"
                    type="text"
                    onChange={handleChange}
                  //required
                  />
                </div>
              </div>
              <div className="mt-5 flex gap-5">
                <div className="w-full">
                  <label htmlFor="address">Dirección</label>
                  <input
                    id="address"
                    name="address"
                    className="input input-bordered w-full"
                    type="text"
                    onChange={handleChange}
                  //required
                  />
                </div>
                <div className="w-[40%]">
                  <label htmlFor="adress">CP</label>
                  <input
                    id="CP"
                    name="CP"
                    className="input input-bordered w-full"
                    type="text"
                    onChange={handleChange}
                  //required
                  />
                </div>
              </div>
              <div className="mt-5">
                <label>Profesores</label>
                <div className="join w-full">
                  <input
                    className="input input-bordered join-item w-full"
                    value={teacher}
                    onChange={(e) => setTeacher(e.target.value)}
                  //required
                  />
                  <button onClick={addTeachers} className="btn join-item ">
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
                <label>Modalidad/es</label>
                <div className="flex justify-between  md:justify-around gap-2 mt-5">
                  <div className="flex flex-col items-center">
                    <span className="label-text">Lindy Hop</span>
                    <input
                      type="checkbox"
                      value="Lindy Hop"
                      className="toggle toggle-sm"
                      onChange={handleCheckBox}
                    />
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="label-text">Blues</span>
                    <input
                      type="checkbox"
                      value="Blues"
                      className="toggle toggle-sm"
                      onChange={handleCheckBox}
                    />
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="label-text">Balboa</span>
                    <input
                      type="checkbox"
                      value="Balboa"
                      className="toggle toggle-sm"
                      onChange={handleCheckBox}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-5 ">
              <label>Precio</label>
              <div className="flex gap-5">
                <div className="flex flex-col w-full">
                  <label>Desde</label>
                  <input type="text"
                  name="minPrice"
                    className="input input-bordered w-full "
                    onChange={handleChange} />
                </div>
                <div className="flex flex-col w-full">
                  <label>Hasta</label>
                  <input type="text"
                  name="maxPrice"
                    className="input input-bordered w-full "
                    onChange={handleChange} />
                </div>
              </div>
              </div>
             

              <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-5  mt-5">
                <div className="w-full">
                  <label htmlFor="data_start">Fecha Inicio</label>
                  <input
                    id="data_start"
                    name="data_start"
                    className="input input-bordered w-full"
                    type="date"
                    onChange={handleChange}
                  //required
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="data_end">Fecha Fin</label>
                  <input
                    id="data_end"
                    name= "data_end"
                    className="input input-bordered w-full"
                    type="date"
                    onChange={handleChange}
                  //required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-5  mt-5">
                <div className="w-full">
                  <label htmlFor="image">Imagen de portada</label>
                  <input
                    id="image"
                    type="file"
                    className="file-input file-input-bordered  w-full"
                    onChange={(e) => setImage(e.target.files[0])}
                  //required
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="url">Url del festival</label>
                  <input
                    type="text"
                    id="url"
                    name="link"
                    className="input input-bordered w-full "
                    onChange={handleChange}
                  // required
                  />
                </div>
              </div>
              <div className="w-full mt-5">
                <label>Descripción</label>
                <Editor />
              </div>
              <div className="grid grid-cols-1 justify-items-center gap-5  mt-5">
                <button className="btn btn-neutral w-full" onClick={handleSubmit}>
                  Enviar
                </button>
              </div>
            </div>
          </form>
        </div>}


    </>
  );
};

export default formAddFestival;
