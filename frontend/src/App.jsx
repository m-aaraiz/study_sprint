import { useState } from "react";

// For task picker
import React from "react";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { ListboxWrapper } from "./components/ListboxWrapper";
//

// for timer card
import { CountdownCircleTimer } from "react-countdown-circle-timer";

//

import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";

function App() {
	const [selectedKeys, setSelectedKeys] = React.useState(new Set(["text"]));

	const selectedValue = React.useMemo(
		() => Array.from(selectedKeys).join(", "),
		[selectedKeys]
	);

	return (
		<main className="p-5">
			<h1 className="text-center text-3xl">StudySprint</h1>
			<div className="flex flex-col md:flex-row gap-5 mt-5">
				{/* Timer card */}
				<Card className="flex-1" style={{ flexGrow: 1.7 }}>
					<CardBody className="items-center">
						<h1 className="text-center text-large mb-11">
							Timer Card
						</h1>

						<CountdownCircleTimer
							size={260}
							isPlaying={true}
							duration={60}
							colors={[
								"#004777",
								"#F7B801",
								"#A30000",
								"#A30000",
							]}
							colorsTime={[7, 5, 2, 30]}
						>
							{({ remainingTime }) => remainingTime}
						</CountdownCircleTimer>
						<p className="text-center">
							Make beautiful websites regardless of your design
							experience.
						</p>
					</CardBody>
				</Card>

				{/* Tasks Card */}
				<div className="flex flex-col flex-1 gap-5">
					<Card>
						<h1 className="text-center mt-2 text-large">
							Select a Task
						</h1>
						<CardBody className="items-center">
							<div>
								<ListboxWrapper style={{ width: "100%" }}>
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
										<ListboxItem key="l3">
											SENG300
										</ListboxItem>
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

					{/* Goal Card */}
					<Card>
						<h1 className="text-center mt-2 text-large">
							Daily Goal
						</h1>
						<p className="text-center text-default-500 text-small">
							Completed: 0 minutes
						</p>
						<CardBody>
							<p>Placeholder text</p>
							<CardFooter>Placeholder text</CardFooter>
						</CardBody>
					</Card>
				</div>
			</div>
		</main>
	);
}

export default App;
