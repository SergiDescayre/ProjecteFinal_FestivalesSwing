const ToggleCalendar = ({ handleCheckBox }) => {
  const handleCheck = (e) => {
    handleCheckBox(e.target.checked);
  };

  return (
    <div className="flex items-center gap-4 justify-center mb-3 md:justify-start md:mb-1">
      <span>Todos</span>
      <input
        type="checkbox"
        value="Lindy Hop"
        className="toggle hover:bg-orange-200 bg-orange-200 border-orange-200 "
        onChange={handleCheck}
      />
      <span>Favoritos</span>
    </div>
  );
};

export default ToggleCalendar;
