export const validateString = (value: unknown) => {
	if (!value || typeof value !== 'string' || value.length === 0) {
		return false;
	}
	return true;
};
