import githubBanner from '../assets/githubbanner.png';
import myResume from '../assets/guillaume_simon.pdf';
import myResumeImg from '../assets/guillaume_simon.png';
import iconeHtml from '../assets/icone_html_5.png';
import iconeCss from '../assets/icone_css.png';
import iconeJs from '../assets/icone_javascript.png';
import iconePhp from '../assets/icone_php.png';
import iconeMysql from '../assets/icone_mysql.png';
import iconeGit from '../assets/icone_git.png';
import iconeGitHub from '../assets/icone_github.png';
import iconeFigma from '../assets/icone_figma.png';
import iconeCanva from '../assets/icone_canva.png';
import iconeSql from '../assets/icone_sql.png';
import iconeNotion from '../assets/icone_notion.png';
import iconeLinux from '../assets/icone_linux.png';
import iconeNginx from '../assets/icone_nginx.png';
import iconeWebpack from '../assets/icone_webpack.png';
import iconeNpm from '../assets/icone_npm.png';
import hobby from '../assets/hobby.png';

export default () => (`
  <div class="bg-gray-50 py-24 sm:py-32">
    <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
      <div class="mt-10 grid gap-4 sm:mt-2 lg:grid-cols-3 lg:grid-rows-2">
        <div class="relative lg:row-span-2">
          <div class="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
          <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
            <div class="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
              <p class="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">Mon CV</p>
              <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">Un aperçu rapide du CV que vous pouvez télécharger juste au dessus.</p>
            </div>
            <div class="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
              <div class="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
              <a
                href="${myResume}"
                download
              >
                <img class="size-full object-cover object-top" src="${myResumeImg}" alt="">
              </a>
              </div>
            </div>
          </div>
          <div class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
        </div>
        <div class="relative max-lg:row-start-1">
          <div class="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
          <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
            <div class="px-8 pt-8 sm:px-10 sm:pt-10">
              <p class="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">Mon GitHub</p>
              <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">Une petite liste de ce que j'ai pu faire durant ma formation</p>
            </div>
            <div class="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
              <a href="https://github.com/GuillaumeSIMONJP" target="_blank" >
                <img class="w-full max-lg:max-w-xs" src="${githubBanner}" alt="">
              </a>
            </div>
            <a
              href="https://github.com/GuillaumeSIMONJP"
              target="_blank"
              class="mt-8 text-center inline-block bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Voir mes projets
            </a>
          </div>
          <div class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
        </div>
        <div class="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
          <div class="absolute inset-px rounded-lg bg-white"></div>
          <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
            <div class="px-8 pt-8 sm:px-10 sm:pt-10">
              <p class="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">Mes Hobby</p>
              <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                J'adore les jeux vidéo et comprendre le fonctionnement derriére.
                En parlent de jeux, la vr est un sujet que je trouve fascinant.
                La lécture mangas en anglais (pour mon niveau c1) ainsi que les animé me permette de décomprésser 
              </p>
            </div>
            <div class="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
              <img class="h-[min(152px,40cqw)] object-cover object-center" src="${hobby}" alt="">
            </div>
          </div>
          <div class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
        </div>
        <div class="relative lg:row-span-2">
          <div class="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
            <div class="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
              <p class="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">Mes compétences</p>
              <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">Voici une liste des sujet sur lesquels j'ai pu acquérir des hard-skills.</p>
            </div>
            <div class="relative min-h-[30rem] w-full grow">
              <div class="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                <div class="flex bg-gray-800/40 ring-1 ring-white/5">
                  <div class="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                    <div class="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">HardSkills_Softwares.js</div>
                    <div class="border-r border-gray-600/10 px-4 py-2">App.js</div>
                  </div>
                </div>
                <div class="px-6 pb-14 pt-6">
                  <p class="text-lime-600 mb-4">// Hard-Skills</p>
                  <div class="grid grid-cols-3 gap-4 mb-2">
                    <div class="flex">
                      <img src="${iconeHtml}" class="object-cover object-top"></img>
                      <p class="text-white"> HTML </p>
                    </div>
                    <div class="flex">
                      <img src="${iconeCss}" class="object-cover object-top"></img>
                      <p class="text-white"> CSS </p>
                    </div>
                    <div class="flex">
                      <img src="${iconeJs}" class="object-cover object-top"></img>
                      <p class="text-white"> JS </p>
                    </div>
                  </div>
                  <div class="grid grid-cols-3 gap-4 mb-8">
                    <div class="flex">
                      <img src="${iconePhp}" class="object-cover object-top"></img>
                      <p class="text-white"> PHP </p>
                    </div>
                    <div class="flex">
                      <img src="${iconeSql}" class="object-cover object-top"></img>
                      <p class="text-white"> SQL </p>
                    </div>
                    <div class="flex">
                      <img src="${iconeGit}" class="object-cover object-top"></img>
                      <p class="text-white"> Git </p>
                    </div>
                  </div>
                  <p class="text-lime-600 mb-4">// Software</p>
                  <div class="grid grid-cols-3 gap-4 mb-2">
                    <div class="flex">
                      <img src="${iconeFigma}" class="object-cover object-top"></img>
                      <p class="text-white"> Figma </p>
                    </div>
                    <div class="flex">
                      <img src="${iconeCanva}" class="object-cover object-top"></img>
                      <p class="text-white"> Canva </p>
                    </div>
                    <div class="flex">
                      <img src="${iconeNotion}" class="object-cover object-top"></img>
                      <p class="text-white"> Notion </p>
                    </div>
                  </div>
                  <div class="grid grid-cols-3 gap-4 mb-4">
                    <div class="flex">
                      <img src="${iconeMysql}" class="object-cover object-top"></img>
                      <p class="text-white"> MySQL </p>
                    </div>
                    <div class="flex">
                      <img src="${iconeGitHub}" class="object-cover object-top"></img>
                      <p class="text-white"> GitHub </p>
                    </div>
                    <div class="flex">
                      <img src="${iconeLinux}" class="object-cover object-top"></img>
                      <p class="text-white"> Linux </p>
                    </div>
                  </div>
                  <div class="grid grid-cols-3 gap-4 mb-4">
                    <div class="flex">
                      <img src="${iconeNginx}" class="object-cover object-top"></img>
                      <p class="text-white"> Nginx </p>
                    </div>
                    <div class="flex gap-2">
                      <img src="${iconeNpm}" class="object-cover object-top"></img>
                      <p class="text-white"> npm </p>
                    </div>
                    <div class="flex">
                      <img src="${iconeWebpack}" class="object-cover object-top"></img>
                      <p class="text-white"> Webpack </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
        </div>
      </div>
    </div>
  </div>
  `);
