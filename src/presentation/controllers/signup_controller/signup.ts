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
		if (R.empty(body))
			return generate_http_response('empty_request_object');
	}
}
