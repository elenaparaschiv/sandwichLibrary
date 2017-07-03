# sandwichLibrary

A library system that stores or returns different libraries. The librarySystem is saved on the window object, from which it can be globally accessed.Then, an example library called sandwichLibrary is designed. Finally, the example library can be loaded in 2 ways. First way is by using the librarySystem created above; second way by saving it as a property on the window object. Also , in this case, to ensure there is no conflict, meaning another element with the same name of sandwichLibrary existed previously, we create a noConflict function which will return our sandwich llibrary and the previous one will be saved on the window object.

