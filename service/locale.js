'use server';
import { cookies } from 'next/headers';

const COOKIE_NAME = 'NEXT_LOCALE';

export async function getUserLocale() {
    const c = await cookies()
    return c.get(COOKIE_NAME)?.value || 'en';
}

export async function setUserLocale(locale) {
    cookies().set(COOKIE_NAME, locale);
}