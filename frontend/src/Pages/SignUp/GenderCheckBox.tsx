

interface GenderCheckBoxProps {
    onCheckboxChange: (gender: string) => void;
    selectedGender: string
}



const GenderCheckBox: React.FC<GenderCheckBoxProps> = ({
    onCheckboxChange,
    selectedGender
}) => {

    return (
        <div>
            <label className="label">
                <span className="text-white label-text">Gender</span>
            </label>
            <div className="form-control flex-row items-center gap-5">
                <label className={`cursor-pointer label ${selectedGender === 'male' ? "selected" : ""}`}>
                    <span className=" ">Male</span>
                    <input
                     type="checkbox"
                      className="checkbox checkbox-info ml-2"
                      checked={selectedGender === 'male'}
                      onChange={() => onCheckboxChange("male")}
                      />
                </label>
                <label className={`cursor-pointer label ${selectedGender === 'female' ? "selected" : ""}`}>
                    <span className=" ">Female</span>
                    <input
                     type="checkbox" 
                     className="checkbox checkbox-info  ml-2"
                     checked={selectedGender === 'female'}
                      onChange={() => onCheckboxChange("female")}
                     />
                </label>
            </div>
        </div>
    );
};

export default GenderCheckBox;