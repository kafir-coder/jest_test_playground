import { Email_validator } from '../../presentation/controllers/signup_controller/protocols';
import validator from 'validator';
export default class email_validator_adapter implements Email_validator {
	validate(email: string): boolean {
		return validator.isEmail(email);
	}
}
