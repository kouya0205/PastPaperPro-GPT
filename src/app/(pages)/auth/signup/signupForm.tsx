'use client';

import {
  Paper,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
  Group,
  Divider,
} from '@mantine/core';
import classes from './signupForm.module.css';
import { GoogleButton } from '@/app/components/ui/button/auth/GoogleButton';
import { TwitterButton } from '@/app/components/ui/button/auth/TwitterButton';
import Link from 'next/link';

export function SignupForm() {
  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          アカウント新規登録
        </Title>
        <Group grow mb="md" mt="md">
          <GoogleButton radius="xl">Google</GoogleButton>
          <TwitterButton radius="xl">Twitter</TwitterButton>
        </Group>

        <Divider
          label="またはメールアドレスで登録"
          labelPosition="center"
          my="lg"
        />

        <TextInput
          label="Email address"
          placeholder="hello@gmail.com"
          size="md"
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          mt="md"
          size="md"
        />
        <Checkbox
          label={
            <>
              私は本サービスの
              <Anchor href="https://mantine.dev" target="_blank" inherit>
                利用契約
              </Anchor>
              と
              <Anchor href="https://mantine.dev" target="_blank" inherit>
                プライバシーポリシー
              </Anchor>
              に同意します
            </>
          }
          mt="xs"
          size="xs"
        />
        <Button fullWidth mt="xl" size="md">
          新規登録
        </Button>

        <Text ta="center" mt="md">
          すでにアカウントをお持ちですか？{' '}
          <Anchor component={Link} href="/auth/login">
            ログインする
          </Anchor>
        </Text>
      </Paper>
    </div>
  );
}
