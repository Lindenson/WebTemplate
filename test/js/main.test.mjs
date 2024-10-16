import { assert } from 'chai';
import { expect } from 'chai';
import { should } from 'chai';
import sinon from 'sinon';


import $ from 'jquery';
const math = Math

describe('Imports are done fine', function () {

    let powStub;

    beforeEach(function () {
        // Замокировать Math.pow не рекомендуется. Лучше мокировать собственные функции или модули.
        powStub = sinon.stub(Math, 'pow').returns(100);
    });

    afterEach(function () {
        powStub.restore();
    });


    it('JQuery is added to project', function () {
        expect(typeof $).to.equals("function");
    });

    it('Math is stubbed and working', function () {
        expect(powStub(2, 2)).to.equals(100);
    });
});

