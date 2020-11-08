// interfaces

// Creates new type

const jay_ = {
	task: 'Earn money!',
	user: "Jay",
	broken: true
};

const printTask = (work: {
	task: string,
	user: string,
	broken: boolean
}): void => {
	console.log(work.task, work.user, work.broken);
}

// TA is too long!! --> Interfaces!!
// Name should be generic.
interface Task {
	task: string;
	user: string;
	broken: boolean;
}

// Checkout method signature
const printTask_ = (work: Task): void => {
	console.log(work.task, work.user, work.broken);
}

printTask_(jay_);

const jay_wrong = {
	task: 'Earn money!',
	user: "Jay",
	broken: 1
}

printTask_(jay_wrong);
// Error.

// can express any type.

interface Vehicle {
	name: string,
	buy_date: Date;
	broken: boolean;
}

// Nested Vehicle
interface VehiclePool {
	vehicles: Vehicle[];
}

// Also funcs
interface VehicleSummary {
	vehicle: Vehicle;
	summary(): string;
}

const vehicleSummary = (vehicleSummary: VehicleSummary) => {
	console.log(vehicleSummary.summary());
}

const obj = {
	vehicle: {
		name: 'Activa',
		buy_date: new Date("2015-09-07"),
		broken: true
	},
	summary() {
		return `${this.vehicle.name} is bought on ${this.vehicle.buy_date}.`;
	}
}

vehicleSummary(obj);
// https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgGoQBbAQGxQbwCgBIEOAWwgC5kBnMKUAcwBoSAjAVwE8B9AEziQaAESEQA3BygB7ANYQQNdjJl44IKQF9ChAPR7kAOQj0I-NJmx5CoSLEQp0WXBAAKqnMiLEAblddaGmdrCABtAF1tXQNkAEEcWhlkGE4QBFpbcGh4JEsXPABlTnJyOChubxJ-Aup80KliWhKyioAKAEoaekYQJmjCBBkQemQa0OLS8sqAXmQ28ddJ1u5ggKKW6Y7kGYA+KuIhkbUIADocGSYF9Yhl6dPmqfaOjoGj0Zl2ACsdg8W8Gg+UgUOoAcjiCDAwF8cFBbGIxC4fEEwmQIAgAHdkGJIG0AEQAJgADABGACsAFoiQBOKkAdjxHXhiNkCiUyAYnAgJC08MeK063QYzAOxCgEDAnCgIGQAAMACT4MBYWinf5nMiULTIYC0ZAqThMDBgZDDZCK5W6tU3U5IgTiLSnWWNHQ6Qjqu7tT5fDpAA

// here vehicleSummary only asks for summary.
// TS does not ask any question to object. Checks for summary func.
// Try commenting vehicle prop from VehicleSummary.
interface Vehicle_ {
	summary(): string
}

const vehicleSummary_ = (vehicleSummary: VehicleSummary) => {
	console.log(vehicleSummary.summary());
}

vehicleSummary_(obj); // Still works!

// Setting up appropriate name.
interface Reportable {
	summary(): string
}

const reportSummary = (report: Reportable) => {
	console.log(report.summary());
}

reportSummary(obj); // Still works!

const drink_cola = {
	color: 'brownish red',
	carbonated: true,
	sugar: 342,
	summary(): string {
		return `My drink has ${this.sugar}g Sugar`;
	}
}

reportSummary(drink_cola);

// Now obj and drink_cola are both type reportable.
// https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgGoQBbAQGxQbwCgBIEOAWwgC5kBnMKUAcwBoSAjAVwE8B9AEziQaAESEQA3BygB7ANYQQNdjJl44IKQF9ChAPR7kAOQj0I-NJmx5CoSLEQp0WXBAAKqnMiLEAblddaGmdrCABtAF1tXQNkAEEcWhlkGE4QBFpbcGh4JEsXPABlTnJyOChubxJ-Aup80KliWhKyioAKAEoaekYQJmjCBBkQemQa0OLS8sqAXmQ28ddJ1u5ggKKW6Y7kGYA+KuIhkbUIADocGSYF9Yhl6dPmqfaOjoGj0Zl2ACsdg8W8Gg+UgUOoAcjiCDAwF8cFBbGIxC4fEEwmQIAgAHdkGJIG0AEQAJgADABGACsAFoiQBOKkAdjxHXhiNkCiUyAYnAgJC08MeK06B2IUAgYE4UBAyAABgASfBgLC0U7-M5kShaZDAWjIFScJgYMDIYbIOUKrXKm6nJECcRaU5Sxo6HSEFV3dqfL6vfSGA1gAAOQQMGODpzA3D9pgQjD9YBwGiYpxkUCYej9ce4AH4AMRDfgQPQAKQAmgB5DEAGSYfqYABUmAAtfVMIsYphxJgAcRkAEUAELsOLdjsAD277AxAGEmL2AJIAURLcQA6q2J2S5L2QABZADSAFUIRjezJCnEvnFUBi5wAOXvUuJzgBewG7cAfhTn3biAGZe9xp3ScRGEW3bdkY-BfAWOAACzQTOO7dgAYtSE4YHEbgAEp0nIcQlt2XxEjOFJGAW5DDmSE4nuWn5+kSS4ABq9nEcQ7gAjtuwDUXE7A4PwggduQ-BQBOcS9mAcSISSYD0WBOFznOCBLhgOByB2c7QX2iF+uwCAdhg0EFnOtD0W4ok4DWIAFtwJaoZw7DDgWFJxJwfrXkSO44MASk7twwAyCxD4yHAEByCBpFfBOva9nI3YQOQr5EiW5aFNetCsXE9HxQS158QWJKcGSTBMDuO5LgAbEW2EdkWcQANQ7pwM4YHI7B7jOcQiDIumFEWyFFspZX8G45CsfAJZfDIHYEfWOAEnEE60PwTDXku14dkwtV7kwe4lv5CBfMAE4iHEGKIdeCCIf2HYzsOE7QTA8kYvF7VtgAEvwqkFjOHZEg+X4Fm2x29h2820BJMgvr2JY7jhEHDq99FYEYcgTsAe7cHERYgO2BYTkS15bhAO5EmV37dkWj64bdTBzsdIBTt9X5xFu801tBW69kWS6gDAZIcXu5Y1jORZ4-WcSsTWGBbiIvYNiIIj1hOO5kuVYB7t+e5kjOtacYUIBLkuRivd2ZX4axnB0mANZkjAIh+sxMQ+tAKCupsFRGiAOCVHAtByNqMBJnQbvcKc3rIDWhTIPwMimGiMiGj7cjIBolTm6YULGmAyQehAkKnMgqG537KSB-y0wpGkCCh7ENbu0MpSKFCfRjDcyB+rIfopLI5D1Esweh3YOSOL3eC8AcZfPN0DDMIQzrvIartPHwvzXLUbqrCPtzB9sewHO8JznJcq8TP3E-cJ0XrOovKy8G0HqvMgsSFFCOBeBiSZ+wAhI7yCFKKTdMGQC5ZOfp24yHbsAcQaIQQD2yA4PIGEIB+iTGAOAPECAkDPp0KevQmCz10PPZAIpkFQDAOvFexCUE0EQSQ1B6Cd77B8PvPAh8riUNIQ8YOF8BjsLIVw++EhH6GGfsAV+yB35QC-gQ4YowhKgDkLwIYcZfhMLUEmGgoJ2CyAxCALUGAiHmDhCQBA5QVBkEgPwGgnIIB8j1OUGg35oIElsUvbBdBp7NyBCKMUEppRbkqHIkAScMA+xNPKRUnCmDlC0IA4oUSoAOh5PgwgvD15tECQopRcBXhAA
// Code Reuse.
// General strategy for Reusable Code in TS
/**
 * 1. Create functions that accepts args that are typed with interfaces.
 * 2. Objects/classes can decide to implement a given interface to work with a function.
 */

