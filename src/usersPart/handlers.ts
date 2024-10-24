import { Composer } from "telegraf"
import { MyContext } from "../types/interface"
import { db } from "../connections/drizzle";
import { usersTable } from "./schema/schema";
import { eq } from "drizzle-orm";
import { justOne } from "../sharedPart/utils";




export const usersComposer = new Composer<MyContext>();




usersComposer.start(async ctx => {

    const thisUserInDb = await db.select().from(usersTable).where(eq(usersTable.user_id, ctx.from.id)).then(justOne)

    if (typeof thisUserInDb === 'undefined') {

        await ctx.reply(`User with ID ${ctx.from.id} was not found in db. Inserting one...`)

        await db.insert(usersTable).values({
            first_name: ctx.from.first_name,
            user_id: ctx.from.id,
            ...(ctx.from.username ? {username: ctx.from.username} : {}) // <- adding a prop if user has username
        })

        await ctx.reply(`✅ User with ID ${ctx.from.id} was successfully registered.`)

    } else {

        return ctx.reply(
            `User with ID ${thisUserInDb.id} is already in DB.` +
            `\n\nFirst name: "${thisUserInDb.first_name}"` +
            `\n\nUsername: ${thisUserInDb.username ? '@' + thisUserInDb.username : 'not defined'}` +
            `\n\nPhone number: ${thisUserInDb.phone_number ? '"' +thisUserInDb.phone_number + '"' : 'not defined'}` +
            `\n\nIs banned: ${thisUserInDb.is_banned}` +
            `\n\nRegistration date: ${thisUserInDb.created_at.toLocaleString('en')}`
        )

    }

})