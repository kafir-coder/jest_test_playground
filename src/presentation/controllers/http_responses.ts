import { outcomming_data } from './protocols/controller';
const errors = {
	empty_request_object: ['the request object is empty', 400],
	imcomplete_request_object: ['the request body is imcomplete', 400],
};

export const generate_http_response = (type: string): outcomming_data => {
	return {
		status: errors[type][1],
		body: errors[type][0],
	};
};
