# ДЗ

## Как делать:

0. Сделать форк этого репозитория в свой аккаунт (только 1 раз в самом начале).

1. Перед выполнением ДЗ сделайте мердж мастера этого репозитория себе в форк (чтобы иметь актуальный код);
2. Создайте новую ветку от актуального мастера для выполнения ДЗ;
3. Выполните ДЗ в этой ветке;
4. Сделайте Pull Request этой ветки в мастер моего репозитория;
5. Напишите мне (a.koretskiy@javascript.info) письмо со ссылкой на PR.

Дедлайн – 21:00 по Москве/Киеву за день до занятия.

## HT1

1. Создать компоненту Rate, которая принимает рейтинг (число от 1 до 5) и его отображает (можно просто показать число, нарисовать звездочки и раскрасить их, и т.д.).
2. Создать компоненту Reviews, где выводить имена и отзывы про рестораны и рейтинг с помощью компоненты Rate.
3. Создать компоненту Restaurant, где показывать Menu и Reviews, а так же средний рейтинг с помощью компоненты Rate.

## HT2

1. Покрыть PropTypes все компоненты (только то, что используется в компоненте).
2. Написать тесты на уменьшение блюд. (усложнение - не используя увеличение).
3. Покрыть тестами Reviews.

## HT3

1. Сделать компонент Order в котором отображать выбранные товары с их количеством, суммоый по каждому товару и общей стоимостью заказа.
2. Сделать у каждой позиции в этом заказа кнопки +/-/удалить (при нажатии на удалить удаляеься все количество товара)

## HT4

1. Переписать review и рестораны на key=>value
2. Добавить users редьюсер
3. Починить отображение review (добавить пользователя из normalizedUsers в редьюсер reviews)
4. Реализовать добавление review в стор и показывать его
5. Написать middleware для генерации uuid

## HT5

1. Загрузить продукты через api middleware
2. Загрузить users через redux-thunk
3. Полностью убрать fixtures из приложения, все грузить с сервера
4. При загрузках показывать лоареры, все грузить максимально низко, там где эти данные нужны
5. При желании переписать все на immer
