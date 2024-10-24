import { Composer, Markup } from "telegraf";
import { MyContext } from "../types/interface";
import {message} from 'telegraf/filters'


export const sharedComposer = new Composer<MyContext>;





sharedComposer.on(message('text'), async ctx => {

    return ctx.reply(
        `Хотите сложить 2 числа ?`,
        Markup.inlineKeyboard(
            [
                [Markup.button.callback(`Да, начнём!`, `calcTwoNums`)],
                [Markup.button.callback(`Удалить сообщение`, `deleteMessage`)]
            ]
        ) 
    )

})

sharedComposer.action('calcTwoNums', async ctx => ctx.scene.enter('calcTwoNums'))

sharedComposer.action('deleteMessage', async ctx => ctx.deleteMessage())