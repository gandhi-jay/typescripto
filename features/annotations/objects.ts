const profile = {
	name: 'Ford Prefect',
	age: 12,
	coords: {
		lat: 0,
		long: 15
	},
	sayHappyBirthday(): void {
		this.age += 1
	},
	sayBelatedHappyBirthday(lateYears: number): void {
		this.age += lateYears;
	}
}

const { age }: { age: number } = profile;
const { age: ag, name }: {age: number, name: string} = profile;
// const { coords: { lat, long } } = profile;
const {
	coords: { lat, long }
}: {
	coords: { lat: number, long: number}
} = profile;

