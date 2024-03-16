import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

// For task picker
import React from "react";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { ListboxWrapper } from "./components/ListboxWrapper";
//

import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";

function App() {
	const [selectedKeys, setSelectedKeys] = React.useState(new Set(["text"]));

	const selectedValue = React.useMemo(
		() => Array.from(selectedKeys).join(", "),
		[selectedKeys]
	);

	return (
		<main className="flex flex-col items-center p-5 w-full min-h-screen">
			<h1 className="text-center text-3xl font-bold">StudySprint</h1>
			<div className="flex flex-row items-center gap-9 mt-6">
				<Card className="w-96">
					<CardBody>
						<p>
							Make beautiful websites regardless of your design
							experience.
						</p>
					</CardBody>
				</Card>

				<Card>
					<CardHeader>Select a Task</CardHeader>
					<CardBody>
						<div className="flex flex-col items-center">
							<ListboxWrapper>
								<Listbox
									aria-label="Single selection example"
									variant="flat"
									disallowEmptySelection
									selectionMode="single"
									selectedKeys={selectedKeys}
									onSelectionChange={setSelectedKeys}
								>
									<ListboxItem key="l1">
										CPSC471
									</ListboxItem>
									<ListboxItem key="l2">
										Business
									</ListboxItem>
									<ListboxItem key="l3">SENG300</ListboxItem>
									<ListboxItem key="l4">
										Single Date
									</ListboxItem>
									<ListboxItem key="l5">
										Iteration
									</ListboxItem>
								</Listbox>
							</ListboxWrapper>
							<p className="text-small text-default-500">
								Selected value: {selectedValue}
							</p>
						</div>
					</CardBody>
				</Card>
			</div>
		</main>
	);
}

export default App;
