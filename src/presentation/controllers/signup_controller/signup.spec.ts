import Sign_controller from './signup';
import { generate_http_response } from '../http_responses';
const make_sut = () => {
	const sign_up_controller = new Sign_controller();
	return sign_up_controller;
};
describe('Sign-up controller', () => {
	it('it should return 400 status code when request body is empty', () => {
		const sut = make_sut();
		const request = {
			body: {},
		};
		const response = sut.handle(request);
		const http_message = generate_http_response('empty_request_object');
		expect(response).toMatchObject(http_message);
	});
	it('it should return 400 status code when a required field is empty or is undefined', () => {
		const sut = make_sut();
		const request = {
			body: {
				name: 'Pumpum Onodera',
				age: 16,
				highlights: 'raped by his own aunt',
				//best_friend: 'Yuichi onodera',
			},
		};

		const response = sut.handle(request);
		const http_message = generate_http_response(
			'imcomplete_request_object',
		);
		console.log(http_message, response);
		expect(response).toMatchObject(http_message);
	});
});
