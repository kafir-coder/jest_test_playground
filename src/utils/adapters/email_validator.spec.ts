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

	it('it should return false if email is invalid', async () => {
		const sut = make_sut();
		const email = 'invalid.pumpum@asano.jp';
		jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false);
		const result = sut.validate(email);
		expect(result).toBe(false);
	});
});
