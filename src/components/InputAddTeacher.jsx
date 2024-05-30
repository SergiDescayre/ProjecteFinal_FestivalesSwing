import { useTranslation } from "react-i18next";

const InputAddTeacher = ({
  teacher,
  addTeachers,
  setTeacher,
  deleteTeacher,
  listOfTeachers,
}) => {
  const { t } = useTranslation("global");
  return (
    <div className="mt-5">
      <label className="text-primary "> {t("formAddFestival.teachers")}</label>
      <div className="join w-full">
        <input
          className="input input-bordered join-item w-full"
          value={teacher}
          onChange={(e) => setTeacher(e.target.value)}
        />
        <button
          onClick={addTeachers}
          className="btn join-item text-zinc-900 bg-primary border-none hover:bg-orange-100 "
        >
          {t("formAddFestival.add")}
        </button>
      </div>
      <div>
        {listOfTeachers.length > 0 && (
          <div className="flex flex-col border border-zinc-900 rounded-md mt-5 px-5 py-2 bg-zinc-100">
            {listOfTeachers.map((teacher) => (
              <div key={teacher} className="flex justify-between">
                <span>{teacher}</span>
                <span
                  className="cursor-pointer text-dark50"
                  onClick={() => deleteTeacher(teacher)}
                >
                  x
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputAddTeacher;
