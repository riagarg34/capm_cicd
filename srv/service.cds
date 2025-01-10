using {db as db} from '../db/schema';
using {ECEmploymentInformation} from './external/ECEmploymentInformation.csn';
using {ECTimeOff} from './external/ECTimeOff.csn';

service mainService @(path: 'mainService') {

    entity Emp as projection on db.Emp;

    entity leaveType as projection on db.leaveType;

    entity Project as projection on db.PROJECT;

    function getDBUser() returns String;

    entity EmpJob as projection on ECEmploymentInformation.EmpJob as EJ {
        key EJ.userId,
        EJ.company,
        EJ.startDate
    };

}