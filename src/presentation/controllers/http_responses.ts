const errors = {
	empty_request_object: ['the request object is empty', 400],
};

export const generate_http_response = type => {
	return {
		status: errors[type][0],
		body: errors[type][1],
	};
};
