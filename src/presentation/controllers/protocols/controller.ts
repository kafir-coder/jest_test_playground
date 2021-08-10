/* eslint-disable @typescript-eslint/no-explicit-any */
export type incomming_data = {
	query?: any;
	body?: any;
	params?: any;
	_auth?: any;
};

export type outcomming_data = {
	status: number;
	body: any;
};

export interface controller {
	handle(request: incomming_data): outcomming_data;
}
