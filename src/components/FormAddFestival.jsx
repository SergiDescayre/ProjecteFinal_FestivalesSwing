import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useFestivalContext } from "../context/FestivalContext";

import ButtonComeBack from "./ButtonComeBack";

import Loading from "./Loading";
import Editor from "./Editor";
import Modal from "./Modal";

import { useTranslation } from "react-i18next";
import InputAddFestival from "./InputAddFestival";
import InputAddTeacher from "./InputAddTeacher";
import InputAddModalities from "./InputAddModalities";
import InputAddImage from "./InputAddImage";

const formAddFestival = () => {
  useEffect(() => {
    setIsUpload(false);
    setListOfTeachers([]);
    setModality([]);
  }, []);
  const navigate = useNavigate();

  const { t } = useTranslation("global");

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
    setMessageModal,
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

  const deleteTeacher = (teacher) => {
    const newTeachers = listOfTeachers.filter((item) => item !== teacher);
    setListOfTeachers(newTeachers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (modality.length <= 0) {
      document.getElementById("my_modal_5").showModal();
      setMessageModal(t("formAddFestival.noModality"));
    } else if (!image) {
      document.getElementById("my_modal_5").showModal();
      setMessageModal(t("formAddFestival.noImage"));
    } else uploadImageToStorage();
  };
  if (isUpload) {
    navigate("/");
  }

  return (
    <>
      <Modal />
      {uploadFestival ? (
        <div className="mt-32" style={{ height: `calc(100vh - 200px)` }}>
          <Loading title={t("loading.register")} />
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
                  <InputAddFestival
                    type={"text"}
                    label={"name"}
                    name={"name"}
                    handleChange={handleChange}
                  />

                  <InputAddFestival
                    type={"text"}
                    label={"city"}
                    name={"city"}
                    handleChange={handleChange}
                  />
                </div>
                <div className="mt-5 flex gap-5">
                  <InputAddFestival
                    type={"text"}
                    label={"address"}
                    name={"address"}
                    handleChange={handleChange}
                  />
                  <InputAddFestival
                    type={"text"}
                    label={"PC"}
                    name={"CP"}
                    handleChange={handleChange}
                  />
                </div>

                <InputAddTeacher
                  teacher={teacher}
                  addTeachers={addTeachers}
                  setTeacher={setTeacher}
                  deleteTeacher={deleteTeacher}
                  listOfTeachers={listOfTeachers}
                />

                <InputAddModalities handleCheckBox={handleCheckBox} />

                <div className="mt-5">
                  <div className="text-center">
                    <label className="text-primary uppercase w-full ">
                      {t("formAddFestival.price")}
                    </label>
                  </div>
                  <div className="flex gap-5">
                    <InputAddFestival
                      type={"text"}
                      label={"from"}
                      name={"minPrice"}
                      handleChange={handleChange}
                    />

                    <InputAddFestival
                      type={"text"}
                      label={"to"}
                      name={"maxPrice"}
                      handleChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid col-1 gap-5 mt-5 md:flex">
                  <InputAddFestival
                    type={"date"}
                    label={"dateStart"}
                    name={"data_start"}
                    handleChange={handleChange}
                  />

                  <InputAddFestival
                    type={"date"}
                    label={"dateEnd"}
                    name={"data_end"}
                    handleChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-5  mt-5">
                  <InputAddImage image={image} setImage={setImage} />

                  <InputAddFestival
                    type={"text"}
                    label={"url"}
                    name={"link"}
                    handleChange={handleChange}
                  />
                </div>
                <div className="w-full mt-5">
                  <label className="text-primary">
                    {" "}
                    {t("formAddFestival.description")}
                  </label>
                  <Editor />
                </div>
                <div className="grid grid-cols-1 justify-items-center gap-5  mt-5">
                  <button className="btn text-zinc-900 bg-primary border-none hover:bg-orange-100 w-full">
                    {t("formAddFestival.send")}
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
