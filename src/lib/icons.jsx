import {
  IconBrandReact,
  IconBrandTypescript,
  IconBrandJavascript,
  IconBrandNodejs,
  IconBrandTailwind,
  IconBrandDocker,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandPhp,
  IconBrandMysql,
  IconBrandSass,
  IconBrandCSharp,
  IconBrandVite,
  IconBrandWhatsapp,
  IconBrandGit,
  IconBrandDebian,
  IconApi,
  IconDatabase,
  IconSql,
  IconFileText,
  IconMail,
  IconCode,
  IconServer,
} from "@tabler/icons-react";

const techMap = {
  react: IconBrandReact,
  typescript: IconBrandTypescript,
  javascript: IconBrandJavascript,
  nodejs: IconBrandNodejs,
  node: IconBrandNodejs,
  express: IconServer,
  tailwind: IconBrandTailwind,
  docker: IconBrandDocker,
  html: IconBrandHtml5,
  html5: IconBrandHtml5,
  css: IconBrandCss3,
  css3: IconBrandCss3,
  php: IconBrandPhp,
  mysql: IconBrandMysql,
  mariadb: IconDatabase,
  sql: IconSql,
  sass: IconBrandSass,
  csharp: IconBrandCSharp,
  vite: IconBrandVite,
  rest: IconApi,
  api: IconApi,
  postgresql: IconDatabase,
  postgres: IconDatabase,
  git: IconBrandGit,
  github: IconBrandGithub,
  database: IconDatabase,
  linux: IconBrandDebian,
};

const socialMap = {
  linkedin: IconBrandLinkedin,
  github: IconBrandGithub,
  mail: IconMail,
  email: IconMail,
  file: IconFileText,
  cv: IconFileText,
  whatsapp: IconBrandWhatsapp,
  phone: IconBrandWhatsapp,
};

export function getTechIcon(id) {
  return techMap[id?.toLowerCase()] ?? IconCode;
}

export function getSocialIcon(id) {
  return socialMap[id?.toLowerCase()] ?? IconCode;
}
