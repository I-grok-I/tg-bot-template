import { Scenes } from "telegraf";
import { MyContext } from "../types/interface";
import { exampleScenes } from "../examplePart/scenes";






export const stage = new Scenes.Stage<MyContext>([
	...exampleScenes
	// ... scene2
])





