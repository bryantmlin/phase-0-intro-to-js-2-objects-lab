const employee = {
    name: "Bryant",
    streetAddress: "6540 Merrimack Dr",
}

function updateEmployeeWithKeyAndValue(employee,key,value) {
    return {
        ...employee,
        [key]:value,
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value) {
    employee[key]=value;
    return employee;
}

function deleteFromEmployeeByKey(employee,key) {
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee,key) {
    delete employee[key];
    return employee;
}
/*  describe('destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)', function () {
    it('updates `employee` with the given `key` and `value` (it is destructive) and returns the entire updated employee', function () {
      expect(destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway')).to.eql({
        name: 'Sam',
        streetAddress: '12 Broadway'
      });

      expect(employee).to.eql({
        name: 'Sam',
        streetAddress: '12 Broadway'
      });
    });
  });

  describe('deleteFromEmployeeByKey(employee, key)', function () {
    it('deletes `key` from a clone of employee and returns the new employee (it is non-destructive)', function () {
      let newEmployee = deleteFromEmployeeByKey(employee, 'name');

      expect(newEmployee['name']).to.equal(undefined);
      expect(typeof newEmployee).to.equal('object');
    });

    it('does not modify the original employee (it is non-destructive)', function () {
      deleteFromEmployeeByKey(employee, 'name');

      expect(employee['name']).to.equal('Sam');
    });
  });

  describe('destructivelyDeleteFromEmployeeByKey(employee, key)', function () {
    it('returns employee without the deleted key/value pair', function () {
      let newEmployee = destructivelyDeleteFromEmployeeByKey(employee, 'name');

      expect(newEmployee['name']).to.equal(undefined);
    });

    it('modifies the original employee', function () {
      let newEmployee = destructivelyDeleteFromEmployeeByKey(employee, 'name');

      expect(employee['name']).to.equal(undefined);
      expect(employee).to.equal(newEmployee);
    });
  });
});
*/