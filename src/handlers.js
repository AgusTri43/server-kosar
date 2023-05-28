/* eslint linebreak-style: ["error", "windows"] */
import employeeModel from '../models/employee.js';
import reportingModel from '../models/reporting.js';

const date = new Date().toDateString('id-ID');

const home = (request, reply)=>{
  const date = new Date().toDateString('id-ID');
  console.log(date + ' : Request success code 200');
  return reply.response('Hello World');
};

const getEmployee = (request, reply) => {
  const {nip} = request.query;
  if (nip) {
    return new Promise((resolve, reject) => {
      employeeModel.getEmployeeByNIP(nip, (error, result) => {
        if (error) reject(error);
        console.log(date + ' : Request GET Employee by NIP success code 200');
        resolve({
          status: 'Success',
          code: 200,
          data: result,
        });
      });
    });
  };

  return new Promise((resolve, reject) => {
    employeeModel.getAllemployees((error, results) => {
      if (error) reject(error);
      console.log(date + ' : Request GET Employees success code 200');
      resolve({
        status: 'Success',
        code: 200,
        data: results,
      });
    });
  });
};

const getReporting = (request, reply) => {
  const {id} = request.query;
  if (id) {
    return new Promise((resolve, reject) => {
      reportingModel.getReportingByID(id, (error, result) => {
        if (error) reject(error);
        console.log(date + ' : Request GET Reporting by ID success code 200');
        resolve({
          status: 'Success',
          code: 200,
          data: result,
        });
      });
    });
  };

  return new Promise((resolve, reject) => {
    reportingModel.getAllReporting((error, results) => {
      if (error) reject(error);
      console.log(date + ' : Request GET Reporting success code 200');
      resolve({
        status: 'Success',
        code: 200,
        data: results,
      });
    });
  });
};

const createEmployee = (request, reply) => {
  const employee = request.payload;
  return new Promise((resolve, reject) => {
    employeeModel.createEmployee(employee, (error, results) => {
      if (error) reject(error);
      console.log(date + ' : Request POST Employee success code 201');
      resolve({
        status: 'Success',
        code: 201,
        data: results,
      });
    });
  });
};

const createReporting = (request, reply) => {
  return new Promise((resolve, reject) => {
    const detail = request.payload;
    reportingModel.createReporting(detail, (error, results) => {
      if (error) reject(error);
      console.log(date + ' : Request POST Reporting success code 201');
      resolve({
        status: 'Success',
        code: 201,
        data: results,
      });
    });
  });
};

const createReason = (request, reply) => {
  const {id} = request.query;

  return new Promise((resolve, reject) => {
    const detail = request.payload;
    reportingModel.createReason(id, detail, (error, results) => {
      if (error) reject(error);
      console.log(date + ' : Request POST Reason success code 201');
      resolve({
        status: 'Success',
        code: 201,
        data: results,
      });
    });
  });
};

const updateEmployee = (request, reply) => {
  const {nip} = request.query;
  const update = request.payload;

  return new Promise((resolve, reject)=>{
    employeeModel.updateEmployee(nip, update, (error, results) => {
      if (error) reject(error);
      console.log(date + ' : Request PUT Employee success code 201');
      resolve({
        status: 'Success',
        code: 201,
        data: results,
      });
    });
  });
};

const updateReporting = (request, reply) => {
  const {id} = request.query;
  const update = request.payload;

  return new Promise((resolve, reject)=>{
    reportingModel.updateReporting(id, update, (error, results) => {
      if (error) reject(error);
      console.log(date + ' : Request PUT Reporting success code 201');
      resolve({
        status: 'Success',
        code: 201,
        data: results,
      });
    });
  });
};

const deleteEmployee = (request, reply) => {
  const {nip} = request.query;

  return new Promise((resolve, reject) => {
    employeeModel.deleteEmployee(nip, (error, results) => {
      if (error) reject(error);
      console.log(date + ' : Request DELETE Employee success code 201');
      resolve({
        status: 'Success',
        code: 201,
        data: results,
      });
    });
  });
};

const deleteReporting = (request, reply) => {
  const {id} = request.query;

  return new Promise((resolve, reject) => {
    reportingModel.deleteReporting(id, (error, results) => {
      if (error) reject(error);
      console.log(date + ' : Request DELETE Reporting success code 201');
      resolve({
        status: 'Success',
        code: 201,
        data: results,
      });
    });
  });
};

const vote = (request, reply) => {
  const {vote} = request.payload;
  const {id} = request.query;

  return new Promise((resolve, reject) => {
    reportingModel.vote(id, vote, (error, results) => {
      if (error) reject(error);
      console.log(date + ' : Request PUT Reporting vote success code 201');
      resolve({
        status: 'Success',
        code: 201,
        data: results,
      });
    });
  });
};

export {
  home,
  getEmployee,
  getReporting,
  createEmployee,
  createReporting,
  createReason,
  updateEmployee,
  updateReporting,
  deleteEmployee,
  deleteReporting,
  vote,
};
