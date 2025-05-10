function Body() {
  return (
      <div className="App">
        <div id="container">
          <form id="container_1_4">
            <input
                type="button"
                value="Задание №1-4"
                className="elements"
                onClick="task_1_4()"
            />

            <label htmlFor="text1">Переменная var1</label>
            <input
                type="text"
                id="text1"
                className="elements"
            />

            <label htmlFor="text2">Переменная var2</label>
            <input
                type="text"
                id="text2"
                className="elements"
            />

            <label htmlFor="text3">Переменная var3</label>
            <input
                type="text"
                id="text3"
                className="elements"
            />

            <label htmlFor="text4">Переменная var4</label>
            <input
                type="text"
                id="text4"
                className="elements"
            />

          </form>

          <form id="container_5">
            <input
                type="button"
                value="Задание №5"
                className="elements"
                onClick="task_5()"
            />

            <label htmlFor="textA">Коэффициент А</label>
            <input
                type="text"
                id="textA"
                className="elements"
            />

            <label htmlFor="textB">Коэффициент В</label>
            <input
                type="text"
                id="textB"
                className="elements"
            />

            <label htmlFor="textC">Коэффициент С</label>
            <input
                type="text"
                id="textC"
                className="elements"
            />
          </form>

          <form id="container_6">
            <input
                type="button"
                value="Задание №6"
                className="elements"
                onClick="task_6()"
            />

            <input
                type="radio"
                id="radioFor"
                name="loop"
                value="for"
                className="loop"
                checked
            />
            <label htmlFor="radioFor">Результат с помощью цикла FOR</label>

            <input
                type="radio"
                id="radioWhile"
                name="loop"
                value="while"
                className="loop"

            />
            <label htmlFor="radioWhile">Результат с помощью цикла While</label>

            <input
                type="radio"
                id="radioDoWhile"
                name="loop"
                value="Do-while"
                className="loop"

            />
            <label htmlFor="radioDoWhile">Результат с помощью цикла Do-While</label>

            <label htmlFor="textFor">Вывод результатов с помощью цикла FOR</label>
            <input
                type="text"
                id="textFor"
                className="elements"
            />

            <label htmlFor="textWHILE">Вывод результатов с помощью цикла WHILE</label>
            <input
                type="text"
                id="textWHILE"
                className="elements"
            />

            <label htmlFor="textDOWHILE">Вывод результатов с помощью цикла DO-WHILE</label>
            <input
                type="text"
                id="textDOWHILE"
                className="elements"
            />
          </form>

          <form id="container_7">
            <input
                type="button"
                value="Задание №7"
                className="elements"
                onClick="task_7()"
            />

            <label htmlFor="selectWeather">Выберите, пожалуйста, погоду.</label>
            <select id="selectWeather">
              <option>Солнечная</option>
              <option>Дождливая</option>
              <option>Снежная</option>
              <option>Ветреная</option>
            </select>
          </form>
        </div>

      </div>
  );
}

export default Body;
