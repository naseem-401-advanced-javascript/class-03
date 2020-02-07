/* eslint-disable no-undefined */
/* eslint-disable strict */
'use strict';

jest.mock('fs');

const reader = require('../lib/edit-file.js');

describe(' \n FS file Read/Write Module ' , () =>
{

  describe (' \n Call back ' , () =>
  {
    it('Read a File and return the contect of it with no errors ', () =>
    {
      let file = `${__dirname}/../../data/person.json`;
      return reader.readWithCallBack(file,(error,data) =>
      {
        expect(error).toBe(undefined);
        expect(typeof data).toBe('object');
      });
    });

    it('Read a File and return the contect of it with and check the type of data "Object"  ', () =>
    {
      let file = `${__dirname}/../../data/person.json`;
      return reader.readWithCallBack(file,(error,data) =>
      {
        expect(typeof data).toBe('object');
      });
    });

    it('when given a bad file ,returns an error ', () =>
    {
      let file = `${__dirname}/../../dataxxx/person.json`;
      return reader.readWithCallBack(file,(error,data) =>
      {
        expect(error).toBeFalsy();
      });
    });

  });

  describe ('\n Promise ' , () =>
  {
    it('Read a File and return the contect of it with no errors ', () =>
    {
      let file = `${__dirname}/../../data/person.json`;
      reader.readWithPromise(file)
        .then(data => expect(data).toBeDefined())
        .catch(error => expect(error).not.toBeDefined());                         
    });

    it('Write a File and return the contect of it after updated it\'s the same ', () =>
    {
      let file = `${__dirname}/../../data/person.json`;
      let person = {'firstName':'Edward','lastName':'Scissorhands','hair':{'type':'wavy','color':'brown'},'favoriteFoods':['pizza','cupcakes','children'],'married':false,'kids':0};
      reader.readWithPromise(file)
        .then(data => expect(data).toBeDefined())
        .then(data => expect(data).toBe(person));                      
    });

    it('Write a File without any error  ', () =>
    {
      let file = `${__dirname}/../../data/person.json`;
      let person = {'firstName':'Nawal  Suliman ','lastName':'Scissorhands','hair':{'type':'wavy','color':'brown'},'favoriteFoods':['pizza','cupcakes','children'],'married':false,'kids':0};
      reader.readWithPromise(file)
        .then(data => expect(data).toBeDefined())
        .then(data => expect(data.firstName).toBe(person.firstName))
        .catch(error => expect(error).not.toBeDefined());                                               
    });

  });

});