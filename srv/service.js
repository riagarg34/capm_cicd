const cds = require("@sap/cds");

module.exports = cds.service.impl(async (service) => {

    sfecei = await cds.connect.to("ECEmploymentInformation");

    service.on("getDBUser", async () => {
        var getUserQuery =
            `SELECT CURRENT_USER FROM DUMMY`;
        var getUser = await cds.run(getUserQuery);
        return getUser;
    });

    service.on("READ", "EmpJob", req => sfecei.run(req.query));
});
