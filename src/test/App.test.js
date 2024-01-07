// test/RecordHealthCareTest.js
const RecordHealthCare = artifacts.require('RecordHealthCare');

contract('RecordHealthCare', (accounts) => {
    let recordHealthCareInstance;

    before(async () => {
        recordHealthCareInstance = await RecordHealthCare.deployed();
    });

    it('should add a new patient', async () => {
        // Dữ liệu mẫu cho bệnh nhân
        const patientData = {
            name: 'John Doe',
            phone: '1234567890',
            gender: 'Male',
            dob: '01/01/1990',
            height: '170',
            weight: '70',
            houseaddr: '123 Main St',
            bloodgroup: 'A+',
            allergies: 'No Allergies',
            emergencyName: 'Emergency Contact',
            emergencyContact: '9876543210',
        };

        // Người gửi là bệnh nhân
        const senderAddress = accounts[0];

        // Gọi hàm setDetailsPatient từ smart contract để thêm bệnh nhân mới
        await recordHealthCareInstance.setDetailsPatient(
            patientData.name,
            patientData.phone,
            patientData.gender,
            patientData.dob,
            patientData.height,
            patientData.weight,
            patientData.houseaddr,
            patientData.bloodgroup,
            patientData.allergies,
            patientData.emergencyName,
            patientData.emergencyContact,
            { from: senderAddress }
        );

        // Kiểm tra xem thông tin bệnh nhân đã được lưu đúng chưa
        const patientDetails = await recordHealthCareInstance.searchPatientDemographic(senderAddress);
        assert.equal(patientDetails[0], patientData.name, 'Incorrect patient name');
        assert.equal(patientDetails[1], patientData.phone, 'Incorrect patient phone');
        assert.equal(patientDetails[2], patientData.gender, 'Incorrect patient gender');
        assert.equal(patientDetails[3], patientData.dob, 'Incorrect patient date of birth');
        assert.equal(patientDetails[4], patientData.height, 'Incorrect patient height');
        assert.equal(patientDetails[5], patientData.weight, 'Incorrect patient weight');
    });
});
