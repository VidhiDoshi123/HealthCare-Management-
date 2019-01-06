pragma solidity 0.5.0;



contract InterfacePatientRecords {

    
    function() public payable;

    
    function addHospital(address _hospital) public;

   
    function removeHospital(address _hospital) public;

    
    function addPatient(address _patient) public;

   
    function removePatient(address _patient) public;

    
    function addRecord(
        address _patientAddress,
        address _hospital,
        uint256 _admissionDate,
        uint256 _dischargeDate,
        uint256 _visitReason) public;

    
    function addName(uint256 _recordID, string _name) public;

    
    function getRecord(uint _recordID, address _patientAddress) public view
      returns(
        string _name,
        address _hospital,
        uint256 _admissionDate,
        uint256 _dischargeDate,
        uint256 _visitReason);

    
    function getRecordByName(string _name) public view returns (uint256 numberOfRecords);

    function getCurrentPatients(uint from, uint to) public view returns (uint _numberOfPatients);

    function setSpringTokenReward(uint256 _tokenReward) public;

    
    function getPatientBalance(address _patientAddress) public view returns (uint256);

    
    function setSpringToken(address _newsprintToken) internal;

    
    function payPatient(address _patientAddress) private;

}
