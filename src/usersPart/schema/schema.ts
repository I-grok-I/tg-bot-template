import {boolean, integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'


export const usersTable = pgTable(
    'users', {
        id: serial('id').primaryKey(),
        user_id: integer('user_id'),
        first_name: text('first_name').notNull(),
        username: text('username'),
        phone_number: text('phone_number'),
        is_banned: boolean('is_banned').default(false).notNull(),
        created_at: timestamp('created_at').defaultNow().notNull()
    }
)

