type Mods = Record<string, string | boolean>;

export const classNames = (cls: string, mod: Mods, additional: string[]): string => {
	return [
		cls,
		...additional,
		...Object.entries(mod).reduce((acc, [className, value]) => {
			if (Boolean(value)) {
				acc.push(className)
			}
            return acc;
		}, []),
	].join(' ');
};
