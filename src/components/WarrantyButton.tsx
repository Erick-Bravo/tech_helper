const WarrantyButton = () => {
  const handleButtonClick = () => {
    const ExcelLink =
      "https://aristonthermo.sharepoint.com/:x:/r/sites/USAWarrantyShipments-SAP/Documenti%20condivisi/General/Warranty%20Parts%20Shipping.xlsx?d=wdd52a2b1fbb145629b47a222ecc8ede3&csf=1&web=1&e=IwmqUj";
    // Replace 'YOUR_FILE_ID' with the actual ID or link to your Excel file in Teams
    const excelFileId = "https://aristonthermo.sharepoint.com/:x:/r/sites/USAWarrantyShipments-SAP/Documenti%20condivisi/General/Warranty%20Parts%20Shipping.xlsx?d=wdd52a2b1fbb145629b47a222ecc8ede3&csf=1&web=1&e=IwmqUj";

    // Generate the deep link to open the Excel file in Teams
    const teamsLink = `msteams://teams.microsoft.com/l/file/${excelFileId}`;

    // Open the link in a new window or redirect the user
    window.open(teamsLink, "_blank");
    return <button onClick={handleButtonClick}>Open Excel in Teams</button>;
  };
};

export default WarrantyButton;
