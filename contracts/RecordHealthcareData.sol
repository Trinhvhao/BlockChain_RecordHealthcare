// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract RecordHealthCareData {
    // Datatype user-defined
    struct Patients {
        // The citizen identification card of Patient
        string ic;
        // The name of the patient
        string name;
        // The patient's contact phone number
        string phone;
        // The gender of the patient(e.g,"Male" or "Female)
        string gender;
        // The patient's date of birth
        string dob;
        //The patient's height, which could be in a specific unit of measurement like centimeters
        string height;
        //The patient's weight, typically measured in kilograms
        string weight;
        // The patient's residential address, which includes details about their home location.
        string houseaddr;
        // The patient's blood group (e.g., "A+", "B-", etc.).
        string bloodgroup;
        // Information the patient is currently taking or has taken.
        string medication;
        // The name of the person to contact in case of an emergency.
        string emergencyName;
        // The contact information (e.g., phone number) for the emergency contact person.
        string emergencyContact;
        // The Ethereum address of the patient
        address addr;
        // A timestamp or date associated with the patient's record
        uint256 date;
    }
    struct Doctors {
        // The citizen identification card of Doctor
        string ic;
        // The name of the doctor
        string name;
        // The contact phone number of the doctor.
        string phone;
        // The gender of the doctor (e.g., "Male" or "Female").
        string gender;
        // The doctor's date of birth.
        string dob;
        //  Information about the doctor's professional qualifications or degrees, indicating their level of education and specialization.
        string qualification;
        // The major or specialization area of the doctor's medical practice
        string major;
        // The Ethereum address of the doctor
        address addr;
        // A timestamp or date associated with the doctor's record, indicating when the information was recorded or last updated.
        uint256 date;
    }
    struct Appointments {
        // The ethereum address of the doctor involved in the appointment
        address doctoraddr;
        // The ethereum address of the patient involved in the appointment
        address patientaddr;
        // Storing the date and time of the appointment.
        string date;
        string time;
        // For holding medical information related to the appointment.

        string description;
        string diagnosis;
        string status;
        // Representing the timestamp when the appointment record was created.
        uint256 creationDate;
    }

    // Define arrray contain patient, doctor, appointments
    address public owner;
    address[] public patientList;
    address[] public doctorList;
    address[] public appointmentList;

    mapping(address => Patients) patients;
    mapping(address => Doctors) doctors;
    mapping(address => Appointments) appointments;

    mapping(address => mapping(address => bool)) isApproved;
    mapping(address => bool) isPatient;
    mapping(address => bool) isDoctor;
    mapping(address => uint32) AppointmentPerPatient;

    // Define original value of a number of patient, doctor, appointment = 0,
    uint32 public patientCount = 0;
    uint32 public doctorCount = 0;
    uint32 public appointmentCount = 0;
    uint32 public permissionGrantedCount = 0;

    // Define modifiers to check that an account can perform a specific function
    modifier onlyDoctor() {
        require(isDoctor[msg.sender], "This address does not have permission ");
        _;
    }
    modifier onlyPatient() {
        require(isPatient[msg.sender], "This address does not have permission");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    //Retrieve patient details from user sign up page and store the details into the blockchain
    function setDetailsPatient(
        string memory _ic,
        string memory _name,
        string memory _phone,
        string memory _gender,
        string memory _dob,
        string memory _height,
        string memory _weight,
        string memory _houseaddr,
        string memory _bloodgroup,
        string memory _emergencyName,
        string memory _emergencyContact
    ) public {
        require(!isPatient[msg.sender], "This address is already a patient");
        Patients storage p = patients[msg.sender];
        p.ic = _ic;
        p.name = _name;
        p.phone = _phone;
        p.gender = _gender;
        p.dob = _dob;
        p.height = _height;
        p.weight = _weight;
        p.houseaddr = _houseaddr;
        p.bloodgroup = _bloodgroup;
        p.emergencyName = _emergencyName;
        p.emergencyContact = _emergencyContact;
        p.addr = msg.sender;
        p.date = block.timestamp;
        patientList.push(msg.sender);
        isPatient[msg.sender] = true;
        isApproved[msg.sender][msg.sender] = true;
        patientCount++;
    }

    // Allows patient to edit their existing record
    function editDetailsPatient(
        string memory _ic,
        string memory _name,
        string memory _phone,
        string memory _gender,
        string memory _dob,
        string memory _height,
        string memory _weight,
        string memory _houseaddr,
        string memory _bloodgroup,
        string memory _emergencyName,
        string memory _emergencyContact
    ) public onlyPatient {
        Patients storage p = patients[msg.sender];
        p.ic =_ic;
        p.name = _name;
        p.phone = _phone;
        p.gender = _gender;
        p.dob = _dob;
        p.height = _height;
        p.weight = _weight;
        p.houseaddr = _houseaddr;
        p.bloodgroup = _bloodgroup;
        p.emergencyName = _emergencyName;
        p.emergencyContact = _emergencyContact;
        p.addr = msg.sender;
    }

    // Retrieve patient details from doctor registration page and store details into the blockchain
    function setDoctor(
        string memory _ic,
        string memory _name,
        string memory _phone,
        string memory _gender,
        string memory _dob,
        string memory _qualification,
        string memory _major
    ) public {
        require(!isDoctor[msg.sender], " This address is already a doctor");
        Doctors storage d = doctors[msg.sender];
        d.ic = _ic;
        d.name = _name;
        d.phone = _phone;
        d.gender = _gender;
        d.dob = _dob;
        d.qualification = _qualification;
        d.major = _major;
        d.addr = msg.sender;
        d.date = block.timestamp;
        doctorList.push(msg.sender);
        isDoctor[msg.sender] = true;
        doctorCount++;
    }

    // Allows doctors to edit their existing profile
    function editDoctor(
        string memory _ic,
        string memory _name,
        string memory _phone,
        string memory _gender,
        string memory _dob,
        string memory _qualification,
        string memory _major
    ) public onlyDoctor {
        Doctors storage d = doctors[msg.sender];
        d.ic = _ic;
        d.name = _name;
        d.phone = _phone;
        d.gender = _gender;
        d.dob = _dob;
        d.qualification = _qualification;
        d.major = _major;
        d.addr = msg.sender;
    }

    // Retrieve appointment details from appointment page and store the details into the blockchain
    function setAppointment(
        address _addr,
        string memory _date,
        string memory _time,
        string memory _diagnosis,
        string memory _description,
        string memory _status
    ) public onlyDoctor {
        Appointments storage a = appointments[_addr];
        a.doctoraddr = msg.sender;
        a.patientaddr = _addr;
        a.date = _date;
        a.time = _time;
        a.diagnosis = _diagnosis;
        a.description = _description;
        a.status = _status;
        a.creationDate = block.timestamp;
        appointmentList.push(_addr);
        appointmentCount++;
        AppointmentPerPatient[_addr]++;
    }

    function updateAppointment(
        address _addr,
        string memory _date,
        string memory _time,
        string memory _diagnosis,
        string memory _description,
        string memory _status
    ) public {
        require(
            isDoctor[msg.sender],
            "This address does not have permission to update new appointments"
        );
        Appointments storage a = appointments[_addr];
        a.doctoraddr = msg.sender;
        a.patientaddr = _addr;
        a.date = _date;
        a.time = _time;
        a.diagnosis = _diagnosis;

        a.description = _description;
        a.status = _status;
    }

    //Owner of the record must give permission to doctor only they are allowed to view records
    //Hàm 'givePermission' được sử dụng để cho phép chủ sở hữu của hợp đồng thông minh cấp quyền truy cập cho một bác sĩ cụ thể để xem hồ sơ của bệnh nhân
    function givePermission(address _address) public returns (bool success) {
        // Dòng mã này thực hiện việc cấp quyền truy cập cho bác sĩ. Nó đặt giá trị liên quan đến địa chỉ'_address' của bác sĩ trong mapping 'isApproved' thành 'true'
        // Điều này có nghĩa là bác sĩ đó có quyền truy cập vào hồ sơ của bệnh nhân.
        isApproved[msg.sender][_address] = true;
        //  Dòng mã này tăng biến permissionGrantedCount lên một đơn vị.  Được sử dụng với mục đích để theo dõi số lượng quyền truy cập đã được cấp
        permissionGrantedCount++;
        //  Hàm trả về true để báo hiệu rằng việc cấp quyền truy cập đã được thực hiện thành công
        return true;
    }

    // Owner of the record can take away the permission granted to doctors to view records
    // cho phép chủ sở hữu hồ sơ thu hồi quyền truy cập đã cấp cho các bác sĩ xem hồ sơ
    function RevokePermission(address _address) public returns (bool success) {
        // Dòng mã này thực hiện việc thu hồi quyền truy cập.
        // Nó thiết lập giá trị liên quan đến địa chỉ của bác sĩ '_address' trong mapping 'isApproved' thành 'false'
        // Mapping isApproved có khả năng lưu trữ thông tin về việc liệu bác sĩ có quyền xem hồ sơ của bệnh nhân hay không
        // Đặt bằng false => Quyền truy cập bị thu hồi
        isApproved[msg.sender][_address] = false;
        // : Dòng mã này cho biết rằng việc thực thi hàm đã thành công và nó trả về true để chỉ ra rằng việc thu hồi quyền truy cập đã được thực hiện thành công.
        return true;
    }

    //Retrieve a list of all patients address
    function getPatients() public view returns (address[] memory) {
        return patientList;
    }

    // Retrieve a list of all doctors address
    function getDoctors() public view returns (address[] memory) {
        return doctorList;
    }

    // Retrieve a list of all appointments address
    function getAppointments() public view returns (address[] memory) {
        return appointmentList;
    }

    //Search patient details by entering a patient address (Only record owner or doctor with permission will be allowed to access)
    function searchPatientDemographic(
        address _address
    )
        public
        view
        returns (
            string memory,
            string memory,
            string memory,
            string memory,
            string memory,
            string memory,
            string memory
        )
    {
        require(isApproved[_address][msg.sender], "Access denied");
        Patients memory p = patients[_address];
        return (p.ic, p.name, p.phone, p.gender, p.dob, p.height, p.weight);
    }

    //Search patient details by entering a patient address(Only record owner or doctor with permission will be allowed to access)
    function searchPatientMedical(
        address _address
    )
        public
        view
        returns (
            string memory,
            string memory,
            string memory,
            string memory,
            string memory
        )
    {
        require(isApproved[_address][msg.sender]);
        Patients memory p = patients[_address];
        return (
            p.houseaddr,
            p.bloodgroup,
            p.medication,
            p.emergencyName,
            p.emergencyContact
        );
    }

    // Search doctor details by entering a doctor address ( Only doctor will allowed to access )
    function searchDoctor(
        address _address
    )
        public
        view
        returns (
            string memory,
            string memory,
            string memory,
            string memory,
            string memory,
            string memory,
            string memory
        )
    {
        require(isDoctor[_address]);
        Doctors memory d = doctors[_address];
        return (d.ic, d.name, d.phone, d.gender, d.dob, d.qualification, d.major);
    }

    // Search appointment details by entering a patient address
    function searchAppointment(
        address _address
    )
        public
        view
        returns (
            address,
            string memory,
            string memory,
            string memory,
            string memory,
            string memory,
            string memory
        )
    {
        // Use memory for reading appointment data
        Appointments memory a = appointments[_address];

        // Use memory for reading doctor data
        Doctors memory d = doctors[a.doctoraddr];

        return (
            a.doctoraddr,
            d.name,
            a.date,
            a.time,
            a.diagnosis,
            a.description,
            a.status
        );
    }

    // Search patient record creation date by entering a patient address
    function searchRecordDate(address _address) public view returns (uint) {
        Patients memory p = patients[_address];
        return (p.date);
    }

    //Search doctor profile creation date by entering a doctor address
    function searchDoctorDate(address _address) public view returns (uint) {
        Doctors memory d = doctors[_address];

        return (d.date);
    }

    // Search appointment creation date by entering a patient address
    function searchAppointmentDate(
        address _address
    ) public view returns (uint) {
        Appointments memory a = appointments[_address];
        return (a.creationDate);
    }

    // Retrieve patient count
    function getPatientCount() public view returns (uint32) {
        return patientCount;
    }

    // Retrieve doctor count
    function getDoctorCount() public view returns (uint32) {
        return doctorCount;
    }

    //Retrieve appointment count
    function getAppointmentCount() public view returns (uint32) {
        return appointmentCount;
    }

    //Retrieve permission granted count
    function getPermissionGrantedCount() public view returns (uint32) {
        return permissionGrantedCount;
    }

    //Retrieve permission granted count
    function getAppointmentPerPatient(
        address _address
    ) public view returns (uint32) {
        return AppointmentPerPatient[_address];
    }
}
