namespace db;

entity Emp {
    key id: Integer;
    name: String;
    department: String;
};

@cds.persistence.exists
  entity PROJECT {
    key id        : Integer;
        name : String(5000);
        module: String(5000);
  }

entity leaveType {
    key id: Integer;
    name: String;
};