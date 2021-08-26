import Email_validator_adapter from './email_validator';
import validator from 'validator';
jest.mock('validator', () => ({
	isEmail: () => true,
}));

const make_sut = () => {
	const email_validator_adapter = new Email_validator_adapter();
	return email_validator_adapter;
};
describe('Email_validator adapter', () => {
	it('it should return true if email is valid', () => {
		const sut = make_sut();
		const email = 'onodera.pumpum@asano.jp';
		const result = sut.validate(email);
		expect(result).toBe(true);
	});
});
