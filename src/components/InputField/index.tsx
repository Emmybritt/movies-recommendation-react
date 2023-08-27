import { Select, TextInput, Textarea } from "@mantine/core";
import { FC } from "react";
type DataAttr = {
	value: string;
	label: string;
};
type InputAttr = {
	placeholder?: string;
	label?: string;
	withAsterisk?: boolean;
	type: "text" | "select" | "textArea" | "file" | "number";
	data?: DataAttr[];
	multitple?: boolean;
	minRows?: number;
	maxRows?: number;
	onChange?: (e: string) => void;
	error?: string;
};

const Input: FC<InputAttr> = ({ placeholder, label, withAsterisk, type, data, multitple, maxRows, minRows, onChange, error }) => {
	return (
		<>
			<div style={{ marginBottom: 10 }}>
				{type === "text" && (
					<TextInput
						onChange={(e) => onChange(e.target.value)}
						styles={{ input: { padding: 23 } }}
						placeholder={placeholder}
						label={label}
						withAsterisk={withAsterisk}
					/>
				)}
				{type === "number" && (
					<TextInput
						type="number"
						onChange={(e) => onChange(e.target.value)}
						styles={{ input: { padding: 23 } }}
						placeholder={placeholder}
						label={label}
						withAsterisk={withAsterisk}
					/>
				)}
				{type === "select" && (
					<Select
						styles={{ input: { padding: 23 } }}
						label={label}
						onChange={(e) => onChange(e)}
						placeholder={placeholder}
						data={data ?? []}
						multiple={multitple}
					/>
				)}

				{type === "textArea" && (
					<Textarea
						label={label}
						onChange={(e) => onChange(e.target.value)}
						placeholder={placeholder}
						autosize
						minRows={minRows}
						maxRows={maxRows}
					/>
				)}
				<p style={{ color: "white", fontSize: 12 }}>{error && error}</p>
			</div>
		</>
	);
};

export default Input;
