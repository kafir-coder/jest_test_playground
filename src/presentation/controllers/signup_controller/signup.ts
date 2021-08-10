import {
	controller,
	incomming_data,
	outcomming_data,
} from '../protocols/controller';
import * as R from 'ramda';
import { generate_http_response } from '../http_responses';
export default class signup implements controller {
	handle(request: incomming_data): outcomming_data {
		const { body } = request;
		const required_fields = ['name', 'age', 'highlights', 'best_friend'];
		if (R.isEmpty(body))
			return generate_http_response('empty_request_object');
		for (const iterator of required_fields) {
			if (!body[iterator])
				return generate_http_response('imcomplete_request_object');
		}
	}
}
