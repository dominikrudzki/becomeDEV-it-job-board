export interface jobInterface {
	id: number;
	bg_color: string;
	title: string;
	company: string;
	location: string;
	technologies: Array<string>;
	salary: { min: number; max: number };
	remote: string;
	languages: Array<string>;
	contact: string;
	exp_level: Array<string>;
	add_date: Date;
	desc: string;
}
