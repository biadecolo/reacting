import { Toggling } from "@/components/Toggling";
import Image from "next/image";
import Raccoon from "../assets/raccoon.svg"
import MyFooter from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <nav className="bg-gray-800">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>
          <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center">
          <svg className="fill-white dark:fill-lime-500" height="40px" width="40px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M511.192,243.608l-14.804-31.053c-1.532-5.375-10.884-36.246-28.622-55.018v-16.519c0-2.848-1.461-5.496-3.869-7.014 c-2.409-1.519-5.427-1.696-7.996-0.47c-8.212,3.919-15.605,10.163-21.758,16.934c-22.119,0.572-40.255,6.381-46.371,8.58 l-58.124-8.303c-7.295-4.264-36.571-19.038-91.492-18.018c-50.66,0.921-85.086,36.283-93.057,45.307 c-13.399,5.082-41.188,27.307-63.213,47.558C60.895,244.892,22.473,283.19,1,322.85c-1.373,2.538-1.329,5.609,0.117,8.107 c1.448,2.497,4.088,4.063,6.976,4.133c0.09,0.002,0.249,0.005,0.476,0.005c5.816,0,56.008-1.809,117.898-60.864 c-1.088,5.737-1.921,11.716-2.33,17.793c-10.042,0.779-17.976,9.199-17.976,19.439v50.721c0,2.2,0.874,4.309,2.428,5.864 l8.847,8.847c1.556,1.556,3.665,2.43,5.865,2.43h17.693c4.581,0,8.294-3.713,8.294-8.294c0-4.58-3.712-8.294-8.294-8.294h-14.259 l-3.988-3.989v-23.105c0-11.364,8.201-15.126,26.914-21.003c10.721-3.367,21.75-6.844,29.664-14.228 c5.43,5.115,10.347,9.129,13.816,11.799l-6.936,20.808c-1.098,3.297-0.025,6.928,2.687,9.099l44.233,35.387 c1.471,1.177,3.298,1.818,5.182,1.818h17.693c4.581,0,8.294-3.713,8.294-8.294c0-4.58-3.712-8.294-8.294-8.294h-14.784 l-21.345-17.076c13.646-15.269,22.74-31.09,28.554-45.969c20.571-0.179,34.84-4.647,41.933-7.533l1.777,1.334l8.715,69.72 c0.52,4.15,4.047,7.265,8.23,7.265h17.693c4.581,0,8.294-3.713,8.294-8.294c0-4.58-3.712-8.294-8.294-8.294h-8.481 c2.026-8.472,7.082-21.34,11.746-31.97l24.478,18.358c0.142,3.231-0.598,9.571-7.068,16.041c-3.239,3.239-3.239,8.491,0,11.728 c1.62,1.619,3.743,2.43,5.865,2.43s4.245-0.809,5.865-2.43c12.312-12.312,12.957-26.362,11.239-33.616 c-0.456-9.236-5.863-24.797-10.784-37.251c7.776-5.165,38.124-25.897,52.715-44.177c15.224-4.149,29.587-7.856,33.595-8.517 c3.823,0.991,17.158,5.997,28.143,10.39c0.98,0.393,2.025,0.594,3.08,0.594h26.54c2.846,0,5.495-1.46,7.014-3.868 C512.24,249.196,512.418,246.178,511.192,243.608z M45.679,309.261c-8.359,3.446-15.602,5.608-21.42,6.963 c8.117-12.484,17.633-24.622,27.24-35.732l16.018,17.903C59.351,303.132,51.992,306.658,45.679,309.261z M81.725,289.399 l-19.082-21.328c3.789-4.076,7.508-7.943,11.079-11.559l20.914,23.375C90.202,283.374,85.889,286.54,81.725,289.399z M107.364,269.235l-21.798-24.364c2.204-2.102,4.29-4.061,6.214-5.841c1.856-1.717,3.687-3.389,5.493-5.017l21.747,24.307 C115.072,262.213,111.184,265.843,107.364,269.235z M144.691,298.816c-1.393,0.438-2.815,0.886-4.25,1.349 c0.014-15.061,3.503-30.296,7.301-42.424c4.994,11.589,12.42,22.016,20.053,30.742 C162.499,293.222,153.464,296.061,144.691,298.816z M312.293,321.029l-1.713-13.702l5.827,4.37 C314.897,315.001,313.528,318.111,312.293,321.029z M478.76,238.884L478.76,238.884c-27.756-11.058-30.989-11.058-32.557-11.058 c-3.258,0-16.79,3.27-40.274,9.729c-0.034-8.58,1.133-21.13,7.252-29.844c2.633-3.749,1.728-8.921-2.021-11.554 c-3.749-2.632-8.922-1.726-11.553,2.023c-13.897,19.791-9.715,50.016-9.53,51.292c0.123,0.849,0.38,1.663,0.746,2.42 c-12.592,12.12-29.807,24.295-37.717,29.68c-0.439-0.994-0.807-1.818-1.076-2.415c-1.883-4.177-6.794-6.037-10.97-4.154 c-4.176,1.882-6.036,6.793-4.154,10.969c3.526,7.824,8.162,19.057,11.698,29.136l-16.803-12.602 c-0.013-0.01-0.026-0.02-0.041-0.03l-30.99-23.242l7.512-30.044c1.11-4.443-1.591-8.946-6.035-10.058 c-4.444-1.11-8.946,1.591-10.059,6.035l-7.887,31.549c-4.783,1.964-15.169,5.417-30.519,6.227 c5.223-20.922,4.19-38.385,1.241-47.233c-1.45-4.346-6.15-6.695-10.49-5.246c-4.346,1.448-6.695,6.145-5.246,10.491 c2.861,8.581,5.904,52.028-32.386,94.33l-3.128-2.503l7.019-21.054c1.173-3.52-0.134-7.391-3.201-9.479 c-0.125-0.085-12.619-8.646-25.094-22.248c-11.118-12.117-24.364-30.714-24.364-50.515c0-3.847-2.645-7.188-6.388-8.071 s-7.603,0.922-9.323,4.363c-0.286,0.573-3.005,6.071-6.277,14.679c-0.487,0.352-0.944,0.755-1.358,1.223 c-1.413,1.595-2.819,3.143-4.222,4.67l-20.804-23.251c21.412-18.141,37.309-28.57,41.351-29.648 c2.039-0.316,3.889-1.382,5.185-2.992c0.324-0.403,32.979-40.249,82.159-41.144c56.843-1.035,83.429,16.113,83.652,16.26 c1.045,0.711,2.239,1.173,3.491,1.352l61.927,8.847c1.45,0.208,2.929,0.025,4.286-0.524c0.157-0.063,12.321-4.915,29.411-7.143 c-1.729,2.987-3.105,5.75-4.071,8.094c-1.743,4.235,0.276,9.082,4.512,10.826c1.034,0.426,2.102,0.627,3.155,0.627 c3.261,0,6.354-1.935,7.672-5.138c2.906-7.061,10.066-17.672,18.686-25.631v19.525c0,4.58,3.712,8.294,8.294,8.294 c2.363,0,4.49-0.993,6-2.579c3.299,5.5,6.077,11.27,8.313,16.526c-3.535,1.681-8.503,4.329-14.692,8.36 c-3.838,2.499-4.923,7.638-2.424,11.476c1.59,2.442,4.247,3.769,6.958,3.769c1.552,0,3.121-0.436,4.518-1.345 c4.745-3.09,8.603-5.212,11.432-6.623c0.651,2.061,0.991,3.293,1.007,3.354c0.13,0.484,0.305,0.955,0.522,1.408l9.457,19.837 H478.76z"></path> </g> </g> </g></svg>
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            <a href="#" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">etymology</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">behavior</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">description</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">taxonomy</a>
            
            <Toggling />
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <span className="absolute -inset-1.5"></span>
          <span className="sr-only">View notifications</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
          </svg>
        </button>
      </div>
    </div>
  </div>

  <div className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pb-3 pt-2">
      <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
      <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
      <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
    </div>
  </div>
</nav>
      <div className="flex flex-row">
        <div className="basis-1/3"></div>
        <div className="basis-1/3 text-center	">
          <div className="py-10"></div>
          <img src="https://media.istockphoto.com/photos/little-raccoon-on-tree-picture-id514622028?k=6&m=514622028&s=612x612&w=0&h=oa6bEuRd9EB_D72qJ5UD57dBfnLWz7onQDm6DFJSVLc=" alt="" className="py-10 rounded-" />
          <h2 className="text-2xl font-bold leading-7 text-gray-900 dark:text-white">Guaxinim</h2>
          <p className="text-black dark:text-white py-8">
          Raccoon, (genus Procyon), any of seven species of nocturnal mammals characterized by bushy ringed tails. The most common and well-known is the North American raccoon (Procyon lotor), which ranges from northern Canada and most of the United States southward into South America. It has a conspicuous black “mask” across the eyes, and the tail is ringed with 5 to 10 black bands. 
          </p>
          
        </div>
        <div className="basis-1/3"></div>
      </div>
      <MyFooter />
    </main>

    
    
  );
}
