import { Scenes } from "telegraf";
import { MyContext } from "../types/interface";
import { exampleScenes } from "../sharedPart/scenes";






export default new Scenes.Stage<MyContext>([
	...exampleScenes
])





