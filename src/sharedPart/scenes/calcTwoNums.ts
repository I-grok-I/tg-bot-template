import { Composer, Markup, Scenes } from "telegraf";
import { MyContext } from "../../types/interface";




const firstStep = new Composer<MyContext>;
firstStep.action('calcTwoNums', async ctx => {
    await ctx.deleteMessage()
    await ctx.reply('Отправьте число')
    return ctx.wizard.next()
});



const secondStep = new Composer<MyContext>;
secondStep.hears(/^\d+$/, async ctx => {

    ctx.session.firstNum = Number(ctx.message.text)

    await ctx.replyWithHTML(
        `✅ Первое число: <b>${ctx.message.text}</b>` + 
        `\n\nОтправьте второе число`
    )

    return ctx.wizard.next()

}).use(async ctx => ctx.reply(`⚠️ Отправьте число!`));



const thirdStep = new Composer<MyContext>;
thirdStep.hears(/^\d+$/, async ctx => {
    
    if (typeof ctx.session.firstNum !== 'number') {
        await ctx.reply(`⚠️ Первое число не обнаружено в сессии. Операция прекращена.`)
        return ctx.scene.leave()
    }

    const { firstNum } = ctx.session

    const sum = Number(ctx.message.text) + firstNum

    await ctx.reply(
        `Сумма двух чисел: ${sum}` + 
        `\n\nХотите ещё посчитать ?`,
        Markup.inlineKeyboard(
            [
                [Markup.button.callback(`Да, начнём!`, `calcTwoNums`)],
                [Markup.button.callback(`Удалить сообщение`, `deleteMessage`)]
            ]
        ) 
    )

    return ctx.scene.leave()

}).use(async ctx => ctx.reply(`⚠️ Отправьте второе число!`));








export const calcTwoNums = new Scenes.WizardScene<MyContext>(
    'calcTwoNums',
    firstStep,
    secondStep,
    thirdStep
);
